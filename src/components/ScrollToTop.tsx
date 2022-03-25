import { Affix, Button } from "antd";
import { useEffect, useState } from "react";

import debounce from "@/utils/debounce";

function ScrollToTop() {
  const [shouldShow, setShouldShow] = useState(false);
  const scrollToTop = () => window.scroll({ behavior: "smooth", top: 0 });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setShouldShow(window.scrollY > 100);
    }, 250);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!shouldShow) return null;
  return (
    <Affix className="fixed right-0 bottom-1" offsetBottom={10}>
      <Button type={shouldShow ? "primary" : "ghost"} onClick={scrollToTop}>
        Scroll to top
      </Button>
    </Affix>
  );
}
export default ScrollToTop;
