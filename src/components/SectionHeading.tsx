
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered ? "text-center mx-auto" : "", "max-w-3xl mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-slate">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
