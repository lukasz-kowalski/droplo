'use client';

import { useState } from 'react';

import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/button/Button';
import { PlusCircle } from '@/components/icons/PlusCircle';
import { LinkForm } from '@/features/createLink/LinkForm';

export const EmptyMenu = (): JSX.Element => {
  const [shouldShowForm, setShouldShowForm] = useState<boolean>(false);

  const showForm = (): void => setShouldShowForm(true);

  const hideForm = (): void => setShouldShowForm(false);

  return (
    <>
      <SectionContainer type="Secondary">
        <div className="text-center">
          <div className="mb-2.5">
            <p className="text-textPrimary font-semibold">Menu jest puste</p>
            <p className="text-textTertiary text-sm">W tym menu nie ma jeszcze żadnych linków</p>
          </div>

          <Button onClick={showForm}>
            <PlusCircle />
            Dodaj pozycję menu
          </Button>
        </div>
      </SectionContainer>

      {shouldShowForm && (
        <SectionContainer>
          <LinkForm onCancel={hideForm} onSubmit={hideForm} />
        </SectionContainer>
      )}
    </>
  );
};
