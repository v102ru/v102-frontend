import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useMemo } from "react";
import "./CustomLink.scss";

interface CustomLinkProps extends LinkProps {
  activeStyle?: React.CSSProperties;
  activeClassName?: string;
}

function CustomLink({
  children,
  activeStyle,
  activeClassName,
  to,
  ...props
}: CustomLinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const className = useMemo(() => {
    const initialClassName = "customLink " + props.className;
    if (props.className) {
      if (activeClassName && match) {
        return `${initialClassName} ${activeClassName}`;
      }

      return initialClassName;
    }

    // TODO
  }, [props, activeClassName, match]);

  return (
    <Link
      to={to}
      {...props}
      style={{ ...props.style, ...activeStyle }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
