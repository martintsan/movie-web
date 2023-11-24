import { BrandPill } from "@/components/layout/BrandPill";
import { Loading } from "@/components/layout/Loading";
import { BlurEllipsis } from "@/pages/layouts/SubPageLayout";

export function MigrationPart() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center font-medium">
      {/* Overlaid elements */}
      <BlurEllipsis />
      <div className="right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute">
        <BrandPill />
      </div>

      {/* Content */}
      <Loading />
      <p className="max-w-[19rem] mt-3 mb-12 text-type-secondary">
        Please hold, we are migrating your data. This shouldn&apos;t take long.
        Also, fuck you.
      </p>
    </div>
  );
}
