import { Link } from '../state';

export const recursivelyAddItem = (
  parentId: string | undefined,
  linkToAdd: Link,
  subElements: Link[],
): Link[] => {
  return subElements.map((element) => {
    if (element.id === parentId) {
      return {
        ...element,
        subElements: [...element.subElements, linkToAdd],
      };
    }

    if (element.subElements.length > 0) {
      return {
        ...element,
        subElements: recursivelyAddItem(parentId, linkToAdd, element.subElements),
      };
    }

    return element;
  });
};

export const recursivelyRemoveItem = (id: string, links: Link[]): Link[] => {
  return links
    .filter((link) => {
      if (link.id === id) {
        return false;
      }

      return true;
    })
    .map((item) => {
      if (item.subElements.length > 0) {
        return {
          ...item,
          subElements: recursivelyRemoveItem(id, item.subElements),
        };
      }

      return item;
    });
};

const recursivelyFindTarget = (links: Link[], targetId: string): Link | undefined => {
  for (const link of links) {
    if (link.id === targetId) {
      return link;
    }
    const foundInSubElements = recursivelyFindTarget(link.subElements, targetId);
    if (foundInSubElements) {
      return foundInSubElements;
    }
  }
  return undefined;
};

export const recursivelyMoveItem = (
  links: Link[],
  idToMove: string,
  targetId?: string,
): { updatedLinks: Link[]; movedElement: Link | undefined } => {
  const updatedLinks: Link[] = [];
  let movedElement: Link | undefined = undefined;

  for (const link of links) {
    if (link.id === idToMove) {
      movedElement = link;
    } else {
      const { updatedLinks: childUpdatedLinks, movedElement: childMoved } = recursivelyMoveItem(
        link.subElements,
        idToMove,
        targetId,
      );
      movedElement = movedElement || childMoved;
      updatedLinks.push({
        ...link,
        subElements: childUpdatedLinks,
      });
    }
  }

  if (movedElement) {
    if (targetId) {
      const target = recursivelyFindTarget(updatedLinks, targetId);
      if (target) {
        target.subElements.push(movedElement);

        updatedLinks.forEach((link) => {
          if (link.subElements) {
            link.subElements = link.subElements.filter((subElement) => subElement.id !== idToMove);
          }
        });
      }
    } else {
      updatedLinks.push(movedElement);
    }
  }

  return { updatedLinks, movedElement };
};
