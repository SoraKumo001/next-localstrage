import { useState } from "react";
import {
  setLocalStorage,
  useGlobalState,
} from "@react-libraries/use-global-state";

setLocalStorage();

const A = () => {
  const [a, setA] = useGlobalState("a", "");
  const [b, setB] = useGlobalState("b", "");
  const [c, setC] = useState("");
  return (
    <div>
      <div>
        A(Global):
        <input onChange={(e) => setA(e.currentTarget.value)} value={a} />
      </div>
      <div>
        B(Global):
        <input onChange={(e) => setB(e.currentTarget.value)} value={b} />
      </div>
      <div>
        C(Local ):
        <input onChange={(e) => setC(e.currentTarget.value)} value={c} />
      </div>
      <hr />
    </div>
  );
};
const Page = () => {
  return (
    <div>
      <div>ウインドウ / コンポーネント間でデータを同期</div>
      <hr />
      <A />
      <A />
    </div>
  );
};

export default Page;
