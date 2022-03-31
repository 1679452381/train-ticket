import React, { useCallback } from "react";

import Header from "../../components/Header";

export default function Home() {
  const onBack = useCallback(() => {
    window.history.back();
    console.log(111);
  }, []);
  return (
    <div>
      <Header title={"首页"} onBack={onBack} />
    </div>
  );
}
