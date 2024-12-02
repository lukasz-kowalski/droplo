import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/button/Button';
import { PlusCircle } from '@/components/icons/PlusCircle';

export const EmptyMenu = (): JSX.Element => {
  return (
    <SectionContainer type="Secondary">
      <div className="text-center">
        <div className="mb-2.5">
          <p className="text-textPrimary font-semibold">Menu jest puste</p>
          <p className="text-textTertiary text-sm">W tym menu nie ma jeszcze żadnych linków</p>
        </div>

        <Button>
          <PlusCircle />
          Dodaj pozycję menu
        </Button>
      </div>
    </SectionContainer>
  );
};
