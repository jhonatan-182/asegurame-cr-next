import Typography from "@mui/material/Typography";

type TextCustomProps = {
  text: string;
  component: React.ElementType;
  isWrap?: boolean;
  className?: string;
  required?: boolean;
};

export default function TextCustom({
  text,
  isWrap = false,
  component = "p",
  className = "",
  required = false,
}: TextCustomProps) {
  return (
    <Typography
      noWrap={isWrap}
      component={component}
      className={className + "font-poppins"}
    >
      {text} {required && <span className="text-alerta_error">*</span>}
    </Typography>
  );
}
