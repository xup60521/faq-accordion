import gsap from "gsap";
import PlusIcon from "/images/icon-plus.svg"
import MinusIcon from "/images/icon-minus.svg"

const accordions = gsap.utils.toArray<HTMLDivElement>(".accordion")

accordions.map(element => {
    const img = element.querySelector("img")
    const p = element.querySelector("p")
    if (!img || !p) return;
    element.querySelector("button")?.addEventListener("click", () => {
        if (p.style.height === "0rem") {
            img.src = MinusIcon;
            img.alt = "minus icon";
            gsap.to(p,  {height: "auto", duration: 0.4,marginTop: "1rem", ease: "power2.out"})
        } else {
            img.src = PlusIcon;
            img.alt = "plus icon";
            gsap.to(p, {height: "0rem", duration: 0.4, marginTop: "-0.2rem", ease: "power2.out"})

        }
    })
})