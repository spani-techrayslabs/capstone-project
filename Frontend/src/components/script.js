class THeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>

                <nav
                    class="fixed top-0 left-0 right-0 bg-yellow-50 z-1000 backdrop-blur-[10px] px-8 py-6 border-b border-[rgba(123,168,189,0.1)] ">
                    <div>

                        <div class="max-w-350 flex justify-between items-center mx-auto my-0">
                            <a href="#home"
                                class="font-serif text-[1.8rem] font-light tracking-[2px] text-[#4a5f6d] flex items-center gap-[0.8rem] no-underline decoration-current decoration-solid decoration-auto"><i class="fa-solid fa-dolly"></i>
                                Deposito</a>
                            <ul id="navLinks" class="md:flex list-outside list-image-none list-none">
                                <li><a href="#home"
                                    class="text-gray-700 text-sm font-light p-6 ">HOME</a>
                                </li>
                                <li><a href="#about"
                                    class="text-gray-700 text-sm font-light  p-6 ">ABOUT</a></li>
                                <li><a href="#contact"
                                    class="text-gray-700 text-sm font-light p-6 ">CONTACT</a>
                                </li>
                                <li><a href="/Frontend/src/pages/role.html"
                                    class="text-gray-700 text-sm font-light rounded-full bg-amber-200 p-6 ">LOGIN<i class="fa-solid fa-circle-user"></i></a></li>
                                <li><a href="/Frontend/src/pages/sign_up.html"
                                    class="text-gray-700 text-sm font-light  p-6 m-[2px] rounded-2xl bg-amber-400">Sign-up<i class="fa-solid fa-arrow-right-to-bracket"></i></a></li>

                            </ul>
                            <div class="menu md:hidden p-2 text-[#4a5f6d] cursor-pointer text-[1.5rem] block">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>

                    </div>


                </nav>


            </header>
            `;
    }
}
customElements.define("t-head", THeader);


class TSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contact" class="max-w-175 mt-32 mr-auto mb-0 ml-auto px-8 py-0 text-center">
            <h2 class="font-serif text-[3rem] font-light text-[#4a5f6d] mb-4 tracking-[2px] ">Get In Touch</h2>
            <p class="text-[1rem] text-[#283008] mb-[3rem] font-light">Let's work together to make works easier</p>
        <form class="flex flex-col gap-1.5 mt-8">
            <div class="flex flex-col text-left">
                <label
                    class="text-[0.85rem] text-[#4a5f6d] mb-2 uppercase tracking-[1.5px] font-light ">Name:</label><br>
                <input id="name" type="text" class="p-[1rem] bg-amber-100"><br>
            </div>
            <div class="flex flex-col text-left">
                <label
                    class="text-[0.85rem] text-[#4a5f6d] mb-2 uppercase tracking-[1.5px] font-light">Email:</label><br>
                <input id="email" type="email" class="p-[1rem] bg-amber-100"><br>

            </div>
            <div class="flex flex-col text-left">
                <label
                    class="text-[0.85rem] text-[#4a5f6d] mb-2 uppercase tracking-[1.5px] font-light">Message:</label><br>
                <input id="Message" type="text" class="p-[1rem] bg-amber-100 min-h-[150px] resize-y"><br>
            </div>


            <button type="submit"
                class="bg-amber-900 text-amber-100 cursor-pointer uppercase tracking-[2px] font-light rounded-xs px-18 py-6 ">Send
                Message</button>
        </form>
        <div class="flex justify-center gap-[2rem] mt-[3rem] flex-wrap">
            <div class="flex items-center gap-[0.5rem] text-[#4a5f6d] text-[0.9rem] font-light"><span>📧</span><a
                    href="mailto:hello@warehouseportfolio.com"
                    class="text-[#4a5f6d] no-underline">hello@warehouseportfolio.com</a></div>

            <div class="flex items-center gap-[0.5rem] text-[#4a5f6d] text-[0.9rem] font-light"><span>📱</span><a
                    href="tel:'+15551234567'" class="text-[#4a5f6d] no-underline"></a>+1 (555) 123-4567</a></div>
            <div class="flex items-center gap-[0.5rem] text-[#4a5f6d] text-[0.9rem] font-light"><span>📍</span><a
                    href="https://www.google.com/maps/place/Colorado,+USA/@38.9979465,-105.550863,7z/data=!3m1!4b1!4m6!3m5!1s0x874014749b1856b7:0xc75483314990a7ff!8m2!3d39.5500507!4d-105.7820674!16zL20vMDFuNHc?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                    class="text-[#4a5f6d] no-underline">Colorado, USA</a></div>

        </div>
        </section>


        `;
    }
}
customElements.define("t-form", TSection);  