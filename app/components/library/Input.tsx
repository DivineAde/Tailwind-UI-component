import { twMerge } from "tailwind-merge";

type InputContainerProp = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
};

export const Input: React.FC<InputContainerProp> = ({
  label,
  description,
  className,
  ...props
}) => {
  const inputBaseClasses: string =
    "bg-gray-50 dark:bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

  const mergedClass: string = twMerge([className, inputBaseClasses]);
  return (
    <form className="max-w-sm space-y-3">
      {label && <label className="font-medium mb-2 text-sm">{label}</label>}
      <input {...props} className={mergedClass} />
      {description && (
        <p className=" font-normal text-gray-700 text-sm block mt-2">
          {description}
        </p>
      )}
    </form>
  );
};
