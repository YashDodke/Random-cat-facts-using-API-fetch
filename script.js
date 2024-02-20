let btn = document.querySelector(".btn");
let url = "https://catfact.ninja/fact";
let result = document.querySelector("p")

btn.addEventListener("click", async () => {
  let fact = await getfact();
  console.log(fact);
  result.innerText=fact;
});

async function getfact() {
  let res = await axios.get(url);
  return res.data.fact;
}
