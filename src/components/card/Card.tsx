import { CardBox } from "./Card.styled";
import { useState, useEffect } from "react";
function Card() {
  const [list, setList] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  let ulRef: any = null;

  const changeLiHeight = (e: HTMLLIElement | MouseEvent, index: number) => {
    // ulRef.children.forEach((item) => {
    //   item.style.width = "100px";
    // });
    for (let item of ulRef.children) {
      item.style.width = "100px";
    }
    ulRef.children[index].style.width = "500px";
  };
  return (
    <CardBox className="container mx-auto w-1/2">
      <ul className="list flex flex-nowrap w-full" ref={(el) => (ulRef = el)}>
        {list.map((index) => {
          return (
            <li
              className="item rounded m-1 overflow-hidden delay-100 transition-all"
              key={index}
              onClick={(e: any) => changeLiHeight(e, index)}
            >
              <img
                className="rounded-sm"
                src={"https://picsum.photos/seed/{" + index + "}picsum/500/300"}
              />
            </li>
          );
        })}
      </ul>
    </CardBox>
  );
}

export default Card;
