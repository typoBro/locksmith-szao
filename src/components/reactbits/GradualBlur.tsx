type GradualBlurProps = {
  position?: "top" | "bottom";
  className?: string;
};

export function GradualBlur({ position = "bottom", className = "" }: GradualBlurProps) {
  const sideClass = position === "bottom" ? "bottom-0" : "top-0";

  return (
    <div className={`pointer-events-none absolute inset-x-0 ${sideClass} h-24 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 h-20 backdrop-blur-[1px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-16 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-10 backdrop-blur-[8px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  );
}
