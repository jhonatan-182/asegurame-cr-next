import Typography from "@mui/material/Typography";

type TextCustomProps = {
  text: string | JSX.Element;
  component: React.ElementType;
  isWrap?: boolean;
  className?: string;
  required?: boolean;
};
export default function TextCustom({
  text,
  component,
  isWrap = false,
  className = "",
  required = false,
}: TextCustomProps) {
  return (
    <Typography noWrap={isWrap} component={component} className={className}>
      {text} {required && <span className="text-alerta_error">*</span>}
    </Typography>
  );
}
