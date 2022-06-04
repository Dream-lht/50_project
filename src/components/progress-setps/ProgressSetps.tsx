import { useEffect, useState } from "react";
import { ProgressSetpsBox } from "./ProgressSetps.style";

interface INode {
  title: number;
  isActive: boolean;
}

export default function ProgressSetps() {
  const [nodeList, setNodeList] = useState<INode[]>([
    {
      title: 1,
      isActive: true,
    },
    {
      title: 2,
      isActive: false,
    },
    {
      title: 3,
      isActive: false,
    },
    {
      title: 4,
      isActive: false,
    },
    {
      title: 5,
      isActive: false,
    },
    {
      title: 6,
      isActive: false,
    },
  ]);
  const [count, setCount] = useState<number>(0);
  //next按钮
  const [isNext, setIsNext] = useState<boolean>(false);

  //prev按钮
  const [isPrev, setIsPrev] = useState<boolean>(false);
  //获取进度条
  let lineRef: any = null;
  //获取节点
  let ulRef: any = null;

  //   下一个节点
  const changeSetpNext = (e: any) => {
    if (isNext) {
      return;
    }
    if (isPrev) {
      setIsPrev(false);
    }
    setCount(count + 1);
  };

  //   对count进行监听操作
  useEffect(() => {
    if (count == nodeList.length - 1) {
      setIsNext(true);
    }

    if (count == 0) {
      setIsPrev(true);
    }
    //  更改进度条
    lineRef.style.width =
      Math.floor((1 / (nodeList.length - 1)) * 100 * count) + "%";

    //   更改节点
    nodeList[count].isActive = true;
    setNodeList([...nodeList]);
  }, [count, isNext, isPrev]);

  //上一个
  const changeSetpPrev = (e: any) => {
    if (count == 0) {
      return;
    }

    if (isNext) {
      setIsNext(false);
    }
    setCount(count - 1);
    nodeList[count].isActive = false;
    setNodeList([...nodeList]);
  };

  return (
    <ProgressSetpsBox className="container mx-auto">
      <ul
        className="progress-container flex justify-between"
        ref={(el) => (ulRef = el)}
      >
        <li
          className="line transition-all delay-100"
          ref={(el) => (lineRef = el)}
        ></li>
        {nodeList.map((node: INode) => {
          return (
            <li
              className={`nodeItem border-4 text-center transition-all delay-100 ${
                node.isActive ? "active" : ""
              }`}
              key={node.title}
            >
              {node.title}
            </li>
          );
        })}
      </ul>
      <button
        className={`button ${isNext ? "disable" : ""}`}
        onClick={(e) => {
          changeSetpNext(e);
        }}
      >
        next
      </button>
      <button
        className={`button ${isPrev ? "disable" : ""}`}
        onClick={(e) => {
          changeSetpPrev(e);
        }}
      >
        prev
      </button>
    </ProgressSetpsBox>
  );
}
