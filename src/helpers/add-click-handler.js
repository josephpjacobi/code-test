export const handleClick = () => {
  const button = document.getElementById('btn');
  button.style.display = "none";
  setTimeout(() => {
    button.style.display = 'inline-block'
  }, 1000)
}

export default handleClick;