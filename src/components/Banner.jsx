function Banner({ children, bannerClass }) {
  return <div className={"banner " + bannerClass}>{children}</div>;
}
export default Banner;
