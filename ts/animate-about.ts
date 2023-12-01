const animateAbout = (
  primaryColor: string,
  secondaryColor: string,
  opacityColor: string
): void => {
  const wrapper: JQuery<HTMLDivElement> = $(".about-start__img");
  if (!wrapper) return;

  const { round } = Math;
  const columnPercent: number = +((157 / 640) * 100).toFixed(1);
  const firstRowPercent: number = +((237 / 534) * 100).toFixed(1);
  const secondRowPercent: number = +((167 / 534) * 100).toFixed(1);
  const thirdRowPercent: number = +((122 / 534) * 100).toFixed(1);
  const halfTopPercent: number = +((135 / 534) * 100).toFixed(1);
  const rightTopPercent: number = +((202 / 534) * 100).toFixed(1);
  const wrapperHeight: number = wrapper.height();
  const wrapperWidth: number = wrapper.width();
  const columnSize: number = round(wrapperWidth * (columnPercent / 100));
  const firstRowSize: number = round(wrapperHeight * (firstRowPercent / 100));
  const secondRowSize: number = round(wrapperHeight * (secondRowPercent / 100));
  const thirdRowSize: number = round(wrapperHeight * (thirdRowPercent / 100));
  const halfTopSize: number = round(wrapperHeight * (halfTopPercent / 100));
  const rightTopSize: number = round(wrapperHeight * (rightTopPercent / 100));
  const gapSize: number = 4;

  const getKeyframes = (): string => {
    const keyFrames3 = `
        @keyframes keyFrames3 {
            from {
                width: ${columnSize}px;
                height: ${halfTopSize}px;
                background-color: ${primaryColor};
                transform: translateX(${columnSize + gapSize}px);
            }
        
            28% {
                width: ${columnSize}px;
                height: ${halfTopSize}px;
                background-color: ${primaryColor};
                transform: translateX(${columnSize + gapSize}px);
            }
        
            43% {
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }

            72% {
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            86% {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        
            to {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        }`;

    const keyFrames4 = `
        @keyframes keyFrames4 {
            from {
                width: ${columnSize}px;
                height: ${firstRowSize + secondRowSize + gapSize}px;
                background-color: ${opacityColor},
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            43% {
                width: ${columnSize}px;
                height: ${firstRowSize + secondRowSize + gapSize}px;
                background-color: ${opacityColor},
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            57% {
                height: ${
                  firstRowSize + secondRowSize + thirdRowSize + 2 * gapSize
                }px;
            }

            72% {
                height: ${
                  firstRowSize + secondRowSize + thirdRowSize + 2 * gapSize
                }px;
            }
        
            86% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
            }
        
            to {
                height: ${firstRowSize + secondRowSize + gapSize}px;
            }
        }`;

    const keyFrames5 = `
        @keyframes keyFrames5 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${rightTopSize}px;
                background-color: ${opacityColor};
                transform: translateX(${2 * (columnSize + gapSize)}px);
            }
        
            14% {
                width: ${columnSize}px;
                transform: translateX(${3 * (columnSize + gapSize)}px);
            }
        
            28% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            57% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            72% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            86% {
                width: ${columnSize}px;
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            to {
                width: ${2 * columnSize + gapSize}px;
                height: ${rightTopSize}px;
                transform: translate(${2 * (columnSize + gapSize)}px, 0);
            }
        }`;

    const keyFrames6 = `
        @keyframes keyFrames6 {
            from {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                background-color: ${primaryColor};
                transform: translateY(${firstRowSize + gapSize}px);
            }
        
            14% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translateY(0);
            }
        
            28% {
                height: ${firstRowSize}px;
            }
        
            43% {
                height: ${firstRowSize}px;
            }
        
            57% {
                height: ${halfTopSize}px;
                transform: translateY(0);
            }
        
            72% {
                height: ${halfTopSize}px;
                transform: translate(${columnSize + gapSize}px, 0);
            }
        
            86% {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            to {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        }`;

    const keyFrames7 = `
        @keyframes keyFrames7 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${secondRowSize}px;
                background-color: ${secondaryColor};
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            14% {
                width: ${2 * columnSize + gapSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            28% {
                width: ${3 * columnSize + 2 * gapSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            43% {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            57% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(0, 0);
            }
        
            72% {
                height: ${secondRowSize}px;
                transform: translate(0, ${firstRowSize + gapSize}px);
            }
        
            86% {
                width: ${columnSize}px;
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            to {
                width: ${2 * columnSize + gapSize}px;
                height: ${secondRowSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + gapSize
    }px);
            }
        }`;

    const keyFrames8 = `
        @keyframes keyFrames8 {
            from {
                width: ${columnSize}px;
                height: ${rightTopSize}px;
                background-color: ${primaryColor};
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      rightTopSize + gapSize
    }px);
            }
        
            14% {
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      rightTopSize + gapSize
    }px);
            }
        
            28% {
                height: ${firstRowSize + secondRowSize + gapSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            43% {
                height: ${firstRowSize}px;
            }
        
            57% {
                height: ${firstRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, 0);
            }
        
            72% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            86% {
                height: ${secondRowSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + gapSize
    }px);
            }
        
            to {
                height: ${rightTopSize}px;
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      rightTopSize + gapSize
    }px);
            }
        }`;

    const keyFrames9 = `
        @keyframes keyFrames9 {
            from {
                width: ${2 * columnSize + gapSize}px;
                height: ${thirdRowSize}px;
                background-color: ${secondaryColor};
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        
            14% {
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        
            28% {
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            43% {
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            57% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            72% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            86% {
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        
            to {
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        }`;

    const keyFrames10 = `
        @keyframes keyFrames10 {
            from {
                width: ${columnSize}px;
                height: ${thirdRowSize}px;
                background-color: ${primaryColor};
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            14% {
                background-color: ${primaryColor};
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            28% {
                background-color: ${secondaryColor};
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            43% {
                background-color: ${secondaryColor};
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            57% {
                background-color: ${primaryColor};
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            72% {
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            86% {
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            to {
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        }`;

    const keyFrames11 = `
        @keyframes keyFrames11 {
            from {
                width: ${columnSize}px;
                height: ${thirdRowSize}px;
                background-color: ${opacityColor};
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            14% {
                width: ${3 * columnSize + 2 * gapSize}px;
                transform: translate(${columnSize + gapSize}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            28% {
                width: ${2 * columnSize + gapSize}px;
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        
            43% {
                width: ${columnSize}px;
            }
        
            57% {
        
            }
        
            72% {
                transform: translate(0, ${
                  firstRowSize + secondRowSize + 2 * gapSize
                }px);
            }
        
            86% {
                transform: translate(${2 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        
            to {
                transform: translate(${3 * (columnSize + gapSize)}px, ${
      firstRowSize + secondRowSize + 2 * gapSize
    }px);
            }
        }`;

    return (
      keyFrames3 +
      keyFrames4 +
      keyFrames5 +
      keyFrames6 +
      keyFrames7 +
      keyFrames8 +
      keyFrames9 +
      keyFrames10 +
      keyFrames11
    );
  };

  const constructWrapper = () => {
    const divs: HTMLDivElement[] = [];
    const head: JQuery<HTMLHeadElement> = $("head");
    const keyframes: string = getKeyframes();

    for (const [index, div] of [...wrapper.find("div")].entries()) {
      divs[index] = div;
    }

    head.append(`<style>${keyframes}</style>`);

    divs[2].style.animation = "keyFrames3 7s infinite ease-in-out 0s";
    divs[3].style.animation = "keyFrames4 7s infinite ease-in-out 0s";
    divs[4].style.animation = "keyFrames5 7s infinite ease-in-out 0s";
    divs[5].style.animation = "keyFrames6 7s infinite ease-in-out 0s";
    divs[6].style.animation = "keyFrames7 7s infinite ease-in-out 0s";
    divs[7].style.animation = "keyFrames8 7s infinite ease-in-out 0s";
    divs[8].style.animation = "keyFrames9 7s infinite ease-in-out 0s";
    divs[9].style.animation = "keyFrames10 7s infinite ease-in-out 0s";
    divs[10].style.animation = "keyFrames11 7s infinite ease-in-out 0s";

    $(divs[0]).css({
      width: columnSize + "px",
      height: firstRowSize + "px",
      backgroundColor: secondaryColor,
    });

    $(divs[1]).css({
      width: columnSize + "px",
      height: firstRowSize + "px",
      backgroundColor: secondaryColor,
      transform: `translateX(${columnSize + gapSize}px)`,
    });

    $(divs[2]).css({
      width: columnSize + "px",
      height: halfTopSize + "px",
      backgroundColor: primaryColor,
      transform: `translateX(${columnSize + gapSize}px)`,
    });

    $(divs[3]).css({
      width: columnSize + "px",
      height: firstRowSize + secondRowSize + gapSize + "px",
      backgroundColor: opacityColor,
      transform: `translateX(${2 * (columnSize + gapSize)}px)`,
    });

    $(divs[4]).css({
      width: 2 * columnSize + gapSize + "px",
      height: rightTopSize + "px",
      backgroundColor: opacityColor,
      transform: `translateX(${2 * (columnSize + gapSize)}px)`,
    });

    $(divs[5]).css({
      width: columnSize + "px",
      height: secondRowSize + "px",
      backgroundColor: primaryColor,
      transform: `translateY(${firstRowSize + gapSize}px)`,
    });

    $(divs[6]).css({
      width: 2 * columnSize + gapSize + "px",
      height: secondRowSize + "px",
      backgroundColor: secondaryColor,
      transform: `translate(${columnSize + gapSize}px, ${
        firstRowSize + gapSize
      }px)`,
    });

    $(divs[7]).css({
      width: columnSize + "px",
      height: rightTopSize + "px",
      backgroundColor: primaryColor,
      transform: `translate(${3 * (columnSize + gapSize)}px, ${
        rightTopSize + gapSize
      }px)`,
    });

    $(divs[8]).css({
      width: 2 * columnSize + gapSize + "px",
      height: thirdRowSize + "px",
      backgroundColor: secondaryColor,
      transform: `translate(0, ${
        firstRowSize + secondRowSize + 2 * gapSize
      }px)`,
    });

    $(divs[9]).css({
      width: columnSize + "px",
      height: thirdRowSize + "px",
      backgroundColor: primaryColor,
      transform: `translate(${2 * (columnSize + gapSize)}px, ${
        firstRowSize + secondRowSize + 2 * gapSize
      }px)`,
    });

    $(divs[10]).css({
      width: columnSize + "px",
      height: thirdRowSize + "px",
      backgroundColor: opacityColor,
      transform: `translate(${3 * (columnSize + gapSize)}px, ${
        firstRowSize + secondRowSize + 2 * gapSize
      }px)`,
    });
  };

  constructWrapper();
};

export { animateAbout };
