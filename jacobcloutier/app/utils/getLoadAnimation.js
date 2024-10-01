export default function getLoadAnimation() {
	return ({
    hidden: {
      x:-50,
      opacity: 0,
    },
    visible: ({duration = 1, delay= 0} = {}) =>  ({
      x:0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      delay
      }
    })
  })
}