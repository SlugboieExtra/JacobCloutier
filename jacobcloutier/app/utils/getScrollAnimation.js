export default function getScrollAnimation() {
	return ({
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: ({duration = 1,delay = 0} = {}) =>  ({
      x: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      delay
      }
    })
  })
}