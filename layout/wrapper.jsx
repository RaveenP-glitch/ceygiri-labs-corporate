import { SpeedInsights } from "@vercel/speed-insights/next";

const Wrapper = ({ children }) => {
  return <>
          <SpeedInsights />
          {children}
        </>;
};

export default Wrapper;
