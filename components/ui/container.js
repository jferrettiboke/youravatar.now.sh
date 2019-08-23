export default ({ children, className }) => (
  <div className={["container mx-auto px-5", className].join(" ")}>
    {children}
  </div>
);
