/* ========================================
   BIRTHDAY WEBSITE
   For Adham ❤️
======================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ========================================
       PAGE LOADER
    ======================================== */

    const pageLoader =
        document.getElementById("pageLoader");

    if (pageLoader) {

        setTimeout(() => {

            pageLoader.classList.add("hide");

            document.body.classList.add("loaded");

        }, 1000);

    }


    /* ========================================
       EMAILJS
    ======================================== */

    if (window.emailjs) {

        emailjs.init({
            publicKey: "HYDdbKwtVNqV3pBSR"
        });

    }


    /* ========================================
       SCROLL REVEAL
    ======================================== */

    const revealElements =
        document.querySelectorAll(
            ".wish-card, .final-birthday-message, .reply-section, .birthday-ending, .story-chapter, .story-ending, .memory-card"
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* ========================================
       PAGE NAVIGATION
    ======================================== */

    const startButton =
        document.querySelector(".start-btn");


    if (startButton) {

        startButton.addEventListener("click", () => {

            startButton.classList.add("is-clicked");


            setTimeout(() => {

                window.location.href =
                    "message.html";

            }, 450);

        });

    }


    /*
       IMPORTANT:
       Only the continue button inside
       message.html gets this function.
    */

    const continueButton =
        document.querySelector(
            ".message-page .continue-btn"
        );


    if (continueButton) {

        continueButton.addEventListener("click", () => {

            continueButton.classList.add(
                "is-clicked"
            );


            setTimeout(() => {

                window.location.href =
                    "memories.html";

            }, 450);

        });

    }


    /* ========================================
       MESSAGE TYPING EFFECT
    ======================================== */

    const typingElement =
        document.getElementById("typingText");


    if (typingElement) {

        const cursor =
            document.querySelector(".cursor");


        const signature =
            document.getElementById("signature");


        const message = `
مش عارف أبدأ كلامي منين، لأن في ناس مهما حاولت توصف مكانتهم في حياتك، تفضل الكلمات أقل بكتير من اللي جواك.

وأنت واحد من الناس دي.

من أول ما عرفتك، حصلت بينا حاجات كتير يمكن وقتها مكانتش باينة إنها هتبقى ذكريات مهمة، لكن مع الوقت بقت كل لحظة وكل ضحكة وكل موقف جزء من حكاية بحب أفتكرها.

يمكن مش كل الأيام كانت مثالية، ويمكن اختلفنا واتخانقنا واتضايقنا من بعض، بس في النهاية فضل في حاجة أهم من كل ده... إن صداقتنا فضلت موجودة.

أنا ممتن لكل لحظة ضحكنا فيها، لكل كلام اتقال، لكل موقف وقفنا فيه جنب بعض، ولكل ذكرى خلت الأيام العادية تبقى ليها معنى مختلف.

والنهارده، في يوم ميلادك، أنا مش بتمنالك بس سنة جديدة حلوة... أنا بتمنالك إن كل اللي جاي يكون أحسن من اللي فات، وإنك تفضل دايمًا الشخص اللي تستحق تكونه.

ومهما الأيام اتغيرت، ومهما الحياة خدت كل واحد في طريق، أتمنى إننا لما نبص ورا في يوم من الأيام نفتكر كل ده ونبتسم.

وفي النهاية، لو كان لازم أختصر كل الكلام ده في جملة واحدة...

“You are the constant in my life.”
`;


        const typingSpeed = 25;

        let currentIndex = 0;


        function finishTyping() {

            if (cursor) {

                cursor.style.display =
                    "none";

            }


            if (signature) {

                setTimeout(() => {

                    signature.classList.add(
                        "show"
                    );

                }, 700);

            }

        }


        function typeMessage() {

            if (currentIndex >= message.length) {

                finishTyping();

                return;

            }


            typingElement.textContent +=
                message[currentIndex];

            currentIndex++;


            setTimeout(
                typeMessage,
                typingSpeed
            );

        }


        setTimeout(
            typeMessage,
            1200
        );

    }


    /* ========================================
       MEMORIES
    ======================================== */

    const memoryGrid =
        document.getElementById("memoryGrid");


    if (memoryGrid) {


        const images = [

            "ChatGPT Image Aug 31, 2026, 10_11_00 PM.png",

            "WhatsApp Image 2026-09-01 at 1.01.40 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.40 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.40 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.41 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.41 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.41 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.41 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.42 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.42 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.42 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.42 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.42 AM (5).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.42 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.43 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM (5).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM (6).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.43 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.44 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.44 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.44 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.45 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.45 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.45 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.45 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.45 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.46 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM (5).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM (6).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM (7).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.46 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.47 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (5).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (6).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM (7).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.47 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.48 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (3).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (4).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (5).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (6).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM (7).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.48 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.49 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.49 AM (2).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.49 AM.jpeg",

            "WhatsApp Image 2026-09-01 at 1.01.50 AM (1).jpeg",
            "WhatsApp Image 2026-09-01 at 1.01.50 AM.jpeg"

        ];


        /* ========================================
           CAPTIONS
        ======================================== */

        const captions = [

            "أول صفحة في حكاية لسه مكملة ❤️",
            "لحظة بسيطة... بس ليها مكان كبير.",
            "من اللحظات اللي بنحب نفتكرها.",
            "دي صورة من أيام ما كنا بنصيع في سيتي مول 😂",
            "صحبة بتخلي الوقت يعدي بشكل مختلف.",
            "تفاصيل صغيرة صنعت ذكريات كبيرة.",
            "هو أخويا الجيماوي يا عم 😂",
            "الصورة دي كانت حلوة اويي❤️",
            "مش عارف مين دا بس الصورة عجبتني 😂",
            "ضحكة من القلب ❤️",
            "أيام عدت... والذكرى فضلت.",
            "وجودك بيخلي اللحظة أحلى.",
            "ذكرياتنا مش محتاجة شرح.",
            "لحظة من اللحظات اللي مبتتنسيش.",
            "الواد كان مذبهل من اللي انتوا بتعملوه 😂",
            "ناس كتير بنقابلهم... وقليل بنفتكرهم.",
            "علمت الواد الصغير يبقى كارف والكبير يبقى عبيط 😂",
            "كانت أحلى حاجه حصلتلي في حياتي ❤️",
            "الوقت بيعدي، والصور بتفضل بس أهم حاجه الكرف 😂.",
            "لحظة تستاهل الابتسامة.",
            "من أرشيف الأيام الحلوة.",
            "كل صورة هنا ليها إحساس مختلف.",
            "يوم مش محتاج أتكلم عنه 🤦‍♂️😂",
            "يوم من الأيام اللي اتخزنت جوانا.",
            "الصورة اللي كنا هنموت عليها 🤦‍♂️😂",
            "لحظة بسيطة... بس مستحيل تتكرر بنفس الشكل.",
            "هنا كان في ضحك كتير.",
            "أيام كان فيها كل شيء أبسط.",
            "I Love You too ❤️",
            "وجودك في الصورة جزء من الحكاية.",
            "لحظة من وقتنا اللي عمره ما بيرجع.",
            "الصورة دي انا مكنتش راضي اتصورها بس لما انت جيت فيها اتصورت علطول ❤️",
            "تفصيلة صغيرة من ذكريات كبيرة.",
            "ودا نفس اليوم اللي مش محتاج اتكلم عنه 🤦‍♂️😂",
            "كل صورة بتاخدنا ليوم تاني.",
            "بتهيألي دي أعفن صورة اتصورتها في حياتي 😂",
            "صحبة تستاهل كل الذكريات دي.",
            "من اللحظات اللي بنقول عليها: ياااه فاكر؟",
            "وقت حلو، وناس أحلى.",
            "طب والله عسل بجد ❤️",
            "دي كانت أول صورة اتصورها انا وانت ❤️",
            "ضحكة اتثبتت في الزمن.",
            "ضحكتك أحلى حاجه في الصورة ❤️",
            "ذكرياتنا فيها حاجات كتير شبهنا.",
            "دي بقى أول صورة ليك اتحطت على تليفوني ❤️😂",
            "هنا كانت واحدة من اللحظات الحلوة.",
            "كل مرة نشوفها نفتكر نفس الإحساس.",
            "أحلى مهندس في الدنيا ❤️",
            "الحظة دي انا كنت حاسس باحساس غريب كدا ❤️",
            "صورة من أيام متستاهلش نفتكرها 😂.",
            "ويمكن دي من أكتر الحاجات اللي بنحبها 😂.",
            "لحظة اتحولت لذكرى.",
            "أيام عدت بسرعة... بس سابت أثر.",
            "الصورة دي لوحدها بتحكي كتير.",
            "بس الطقم كان جامد عليك 😍",
            "التغفيلة الغريبة اللي انا مش فاهمها لحد دلوقتي 😂 امال لو كنا احنا اللي ثانوية بقى كنا هنعمل ايه🤦‍♂️",
            "كل صورة بتثبت إننا عشنا لحظات حلوة.",
            "لسه في كتير نفتكره.",
            "ومهما الوقت عدى، اللحظات دي هتفضل.",
            "آخر كام صورة... بس مش آخر الذكريات.",
            "والحكاية لسه مكملة ❤️"

        ];


        const total =
            images.length;


        /* ========================================
           TOTAL COUNTER
        ======================================== */

        const totalMemories =
            document.getElementById(
                "totalMemories"
            );


        if (totalMemories) {

            totalMemories.textContent =
                total;

        }


        /* ========================================
           CREATE MEMORY CARDS
        ======================================== */

        images.forEach((image, index) => {

            const card =
                document.createElement("article");


            card.className =
                "memory-card";


            card.setAttribute(
                "data-number",
                String(index + 1).padStart(2, "0")
            );


            /* PHOTO */

            const photo =
                document.createElement("div");


            photo.className =
                "memory-photo";


            const img =
                document.createElement("img");


            img.src =
                image;


            img.alt =
                `Memory ${index + 1}`;


            img.loading =
                index < 6
                    ? "eager"
                    : "lazy";


            img.decoding =
                "async";


            photo.appendChild(img);


            /* CAPTION */

            const caption =
                document.createElement("div");


            caption.className =
                "memory-caption";


            const text =
                document.createElement("p");


            text.textContent =
                captions[index] ||
                "ذكرى من أجمل أيامنا ❤️";


            const detail =
                document.createElement("span");


            detail.setAttribute(
                "aria-hidden",
                "true"
            );


            detail.textContent =
                "✦";


            caption.appendChild(text);

            caption.appendChild(detail);


            /* COMPLETE CARD */

            card.appendChild(photo);

            card.appendChild(caption);

            memoryGrid.appendChild(card);

        });


        /* ========================================
           MEMORY REVEAL
        ======================================== */

        const cards =
            document.querySelectorAll(
                ".memory-card"
            );


        if ("IntersectionObserver" in window) {

            const memoryObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.08
                    }
                );


            cards.forEach(card => {

                memoryObserver.observe(card);

            });


        } else {

            cards.forEach(card => {

                card.classList.add(
                    "visible"
                );

            });

        }

    }


    /* ========================================
       STORY BUTTON
    ======================================== */

    const storyButton =
        document.getElementById(
            "storyButton"
        );


    if (storyButton) {

        storyButton.addEventListener(
            "click",
            () => {

                storyButton.classList.add(
                    "is-clicked"
                );


                setTimeout(() => {

                    window.location.href =
                        "story.html";

                }, 450);

            }
        );

    }


    /* ========================================
       BIRTHDAY BUTTON
    ======================================== */

    const birthdayButton =
        document.getElementById(
            "birthdayButton"
        );


    if (birthdayButton) {

        birthdayButton.addEventListener(
            "click",
            () => {

                birthdayButton.classList.add(
                    "is-clicked"
                );


                setTimeout(() => {

                    window.location.href =
                        "birthday.html";

                }, 450);

            }
        );

    }


    /* ========================================
       BIRTHDAY CONFETTI
    ======================================== */

    if (
        document.body.classList.contains(
            "birthday-page"
        )
    ) {

        setTimeout(() => {

            createConfetti();

        }, 1200);

    }


    function createConfetti() {

        const container =
            document.createElement("div");


        container.className =
            "confetti-container";


        document.body.appendChild(
            container
        );


        for (let i = 0; i < 45; i++) {

            const piece =
                document.createElement("span");


            piece.className =
                "confetti";


            piece.style.left =
                Math.random() * 100 + "%";


            piece.style.animationDelay =
                Math.random() * 1.2 + "s";


            piece.style.animationDuration =
                2.8 + Math.random() * 1.8 + "s";


            piece.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            const size =
                5 + Math.random() * 5;


            piece.style.width =
                size + "px";


            piece.style.height =
                size * 1.6 + "px";


            container.appendChild(
                piece
            );

        }


        setTimeout(() => {

            container.remove();

        }, 6000);

    }


    /* ========================================
       EMAIL SUCCESS OVERLAY
    ======================================== */

    function showEmailSuccess() {

        const overlay =
            document.createElement("div");


        overlay.className =
            "email-success-overlay";


        overlay.innerHTML = `
            <div class="email-success-box">

                <div class="email-success-icon">
                    ✦
                </div>

                <h2>
                    Message Received ❤️
                </h2>

                <p>
                    رسالتك وصلتلي بنجاح.
                    <br>
                    شكرًا على الكلام اللي كتبته ❤️
                </p>

            </div>
        `;


        document.body.appendChild(
            overlay
        );


        requestAnimationFrame(() => {

            overlay.classList.add(
                "show"
            );

        });


        setTimeout(() => {

            overlay.classList.remove(
                "show"
            );


            setTimeout(() => {

                overlay.remove();

            }, 500);

        }, 2800);

    }


    /* ========================================
       BIRTHDAY REPLY — EMAILJS
    ======================================== */

    const birthdayReplyForm =
        document.getElementById(
            "birthdayReplyForm"
        );


    if (
        birthdayReplyForm &&
        window.emailjs
    ) {

        birthdayReplyForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const button =
                    birthdayReplyForm.querySelector(
                        ".send-message-btn"
                    );


                const buttonText =
                    button.querySelector(
                        "span"
                    );


                const messageField =
                    document.getElementById(
                        "friendMessage"
                    );


                const message =
                    messageField.value.trim();


                /* EMPTY MESSAGE */

                if (!message) {

                    messageField.focus();

                    return;

                }


                messageField.value =
                    message;


                /* DISABLE BUTTON */

                button.disabled =
                    true;


                buttonText.textContent =
                    "SENDING...";


                /* SEND THROUGH EMAILJS */

                emailjs.sendForm(
                    "service_qzfhrqe",
                    "template_e1la0nk",
                    birthdayReplyForm
                )

                .then(() => {

                    buttonText.textContent =
                        "MESSAGE SENT ❤️";


                    messageField.value =
                        "";


                    showEmailSuccess();

                })

                .catch((error) => {

                    console.error(
                        "EmailJS Error:",
                        error
                    );


                    buttonText.textContent =
                        "TRY AGAIN";


                    alert(
                        "حصلت مشكلة في إرسال الرسالة، جرّب تاني ❤️"
                    );

                })

                .finally(() => {

                    setTimeout(() => {

                        button.disabled =
                            false;


                        buttonText.textContent =
                            "SEND MESSAGE";

                    }, 2500);

                });

            }
        );

    }

});