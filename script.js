const askButton = document.getElementById("ask-ai");
const questionBox = document.getElementById("user-question");
const responseBox = document.getElementById("ai-response");

askButton.addEventListener("click", async () => {

    const question = questionBox.value.trim();

    if (!question) {
        responseBox.innerHTML = "<p>Please enter a question first.</p>";
        return;
    }

    responseBox.innerHTML = "<p>🤖 Thinking...</p>";

    try {

        const response = await fetch("/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const data = await response.json();

        let answer = data.answer;

        responseBox.innerHTML = answer
            .replace(/^### (.*)$/gm, "<h3>$1</h3>")
            .replace(/^## (.*)$/gm, "<h2>$1</h2>")
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/^\* (.*)$/gm, "• $1")
            .replace(/\n/g, "<br>");

    } catch (error) {

        console.error(error);

        responseBox.innerHTML =
            "<p>Sorry, something went wrong. Please try again.</p>";
    }

});
function showFestival(festival) {

    const details = document.getElementById("festival-details");
    const content = document.getElementById("festival-content");

    let information = "";

    if (festival === "chilam") {

    information = `
        <h2>🌸 Chilam Joshi Festival</h2>

        <div class="festival-gallery">
            <img src="images/chilam-joshi-1.JPEG" alt="Chilam Joshi Festival">
            <img src="images/chilam-joshi-2.JPEG" alt="Chilam Joshi Festival">
            <img src="images/chilam-joshi-3.JPEG" alt="Chilam Joshi Festival">
            <img src="images/chilam-joshi-4.JPEG" alt="Chilam Joshi Festival">
        </div>

        <h3>📅 Dates & Timing</h3>
        <p>
            Chilam Joshi is celebrated annually from May 13 to May 16
            to welcome the spring season and pray for the safety of
            livestock.
        </p>

        <h3>📍 Location</h3>
        <p>
            The festival takes place in the three Kalash valleys:
            Bumburet, Rumbur, and Birir in Chitral.
        </p>

        <h3>👗 Traditional Attire</h3>
        <p>
            Women and girls wear traditional black robes decorated
            with bright multi-colored embroidery, cowrie shells,
            beaded necklaces, and beautiful traditional headpieces.
        </p>

        <h3>💃 Rituals & Dance</h3>
        <p>
            The festival features traditional dancing, music,
            community gatherings, and sacred milk offerings.
        </p>

        <h3>⭐ What Visitors Can Experience</h3>
        <p>
            Visitors can experience colorful Kalash traditions,
            traditional dances, music, unique clothing, and the
            welcoming atmosphere of the Kalash valleys.
        </p>
    `;

   } else if (festival === "shandur") {

    information = `
        <h2>🏇 Shandur Polo Festival</h2>

        <div class="festival-gallery">
            <img src="images/shandur-polo-1.JPEG" alt="Shandur Polo Festival">
            <img src="images/shandur-polo-2.JPEG" alt="Shandur Polo Festival">
            <img src="images/shandur-polo-3.JPEG" alt="Shandur Polo Festival">
            <img src="images/shandur-polo-4.JPEG" alt="Shandur Polo Festival">
        </div>

        <h3>📅 Timing</h3>
        <p>
            The Shandur Polo Festival is traditionally held in July.
            Visitors should verify the official dates before planning
            their trip.
        </p>

        <h3>📍 Location</h3>
        <p>
            The festival takes place at Shandur Pass, between Chitral
            and Gilgit-Baltistan.
        </p>

        <h3>🏔️ Shandur Pass</h3>
        <p>
            Shandur is a spectacular high-altitude mountain plateau
            famous for its beautiful scenery and its historic polo ground.
        </p>

        <h3>🏇 Polo Matches</h3>
        <p>
            The main attraction is the exciting freestyle polo competition,
            bringing together teams associated with Chitral and
            Gilgit-Baltistan.
        </p>

        <h3>🎵 Cultural Activities</h3>
        <p>
            Alongside polo, visitors can experience local music,
            traditional food, cultural activities, and the unique
            atmosphere of the festival.
        </p>

        <h3>⭐ What Visitors Can Experience</h3>
        <p>
            Visitors can enjoy thrilling polo matches while surrounded
            by the spectacular mountains and landscapes of Shandur.
            Because mountain weather and road conditions can change
            quickly, visitors should check current travel conditions
            before going.
        </p>
    `;

    } else if (festival === "uchal") {

    information = `
        <h2>🌾 Uchal Festival</h2>

       <div class="festival-gallery">
    <img src="images/uchal-1.JPEG" alt="Uchal Festival">
    <img src="images/uchal-2.JPEG" alt="Uchal Festival">
    <img src="images/uchal-3.JPEG" alt="Uchal Festival">
    <img src="images/uchal-5.JPEG" alt="Uchal Festival">
</div>

        <h3>📅 Timing</h3>
        <p>
            Uchal is traditionally celebrated in August as an important
            harvest festival of the Kalash community.
            Visitors should verify the exact dates before traveling.
        </p>

        <h3>📍 Location</h3>
        <p>
            The festival is celebrated by the Kalash community in the
            Kalash valleys of Chitral, including Bumburet, Rumbur, and Birir.
        </p>

        <h3>🌾 Harvest Celebration</h3>
        <p>
            Uchal celebrates the harvest and expresses gratitude for
            the crops and food produced during the season. It is an
            important time for community gatherings and traditional
            celebrations.
        </p>

        <h3>🙏 Rituals & Traditions</h3>
        <p>
            Traditional prayers, community activities, and cultural
            customs are performed as part of the celebration.
        </p>

        <h3>💃 Music & Dance</h3>
        <p>
            Traditional songs, dancing, colorful clothing, and
            community gatherings are important parts of the festival.
        </p>

        <h3>🍽️ Food & Community</h3>
        <p>
            Families and community members gather together and share
            traditional food while celebrating the harvest.
        </p>

        <h3>⭐ What Visitors Can Experience</h3>
        <p>
            Visitors can experience Kalash culture, traditional music
            and dancing, colorful clothing, local food, and the
            welcoming atmosphere of the harvest celebration.
        </p>
    `;

    } else if (festival === "chaumos") {

    information = `
        <h2>❄️ Chaumos Festival</h2>

        <div class="festival-gallery">
            <img src="images/chaumos-1.JPEG" alt="Chaumos Festival">
            <img src="images/chaumos-2.JPEG" alt="Chaumos Festival">
            <img src="images/chaumos-3.JPEG" alt="Chaumos Festival">
            <img src="images/chaumos-4.JPEG" alt="Chaumos Festival">
        </div>

        <h3>📅 Timing</h3>
        <p>
            Chaumos is the major winter festival of the Kalash community.
            It is traditionally celebrated during December and lasts for
            several days.
        </p>

        <h3>📍 Location</h3>
        <p>
            Chaumos is celebrated in the Kalash valleys of Chitral,
            including Bumburet, Rumbur, and Birir.
        </p>

        <h3>❄️ Winter Celebration</h3>
        <p>
            Chaumos is an important winter celebration involving
            traditional rituals, prayers, community gatherings,
            music, and cultural activities.
        </p>

        <h3>🙏 Traditional Rituals</h3>
        <p>
            The festival includes various traditional ceremonies and
            rituals that are deeply connected with Kalash beliefs,
            community life, and the winter season.
        </p>

        <h3>💃 Music & Dance</h3>
        <p>
            Traditional songs, dances, and cultural performances are
            an important part of the celebrations.
        </p>

        <h3>👗 Traditional Clothing</h3>
        <p>
            The festival provides an opportunity to see the distinctive
            traditional clothing and cultural practices of the Kalash people.
        </p>

        <h3>⭐ What Visitors Can Experience</h3>
        <p>
            Visitors can experience the unique winter traditions,
            traditional music and dancing, colorful clothing, and
            cultural atmosphere of the Kalash community.
        </p>
    `;
    }

    content.innerHTML = information;
    details.style.display = "block";

    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function closeFestival() {

    const details = document.getElementById("festival-details");

    details.style.display = "none";
}

          function showHotel(hotel, button) {

    let hotelInformation = "";

    if (hotel === "hindukush") {

        hotelInformation = `
            

            <div class="hotel-gallery">
                <img src="images/hindukush-heights.1jfif"
                     alt="Hindukush Heights">

                <img src="images/hindukush-heights.2jfif"
                     alt="Hindukush Heights">

                <img src="images/hindukush-heights.3jfif"
                     alt="Hindukush Heights">
            </div>

            <h3>📍 Location</h3>
            <p>Chitral, Khyber Pakhtunkhwa, Pakistan.</p>

            <h3>🕐 Check-in & Check-out</h3>
            <p>
                <strong>Check-in:</strong> 12:00
                <br>
                <strong>Check-out:</strong> 12:00
            </p>

            <h3>📞 Contact</h3>
            <p>
                <strong>Phone:</strong> (0943) 413151
            </p>

            <h3>🏔️ About the Hotel</h3>
            <p>
                Hindukush Heights provides accommodation for visitors
                exploring Chitral and its surrounding mountain areas.
                It is a convenient option for travelers looking for
                a comfortable stay in Chitral.
            </p>
        `;

    } else if (hotel === "towninn") {

        hotelInformation = `
            

            <div class="hotel-gallery">
                <img src="images/town-inn1.jfif"
                     alt="Town Inn Guest House">

                <img src="images/town-inn2.jfif"
                     alt="Town Inn Guest House">

                <img src="images/town-inn3.jfif"
                     alt="Town Inn Guest House">
            </div>

            <h3>📍 Location</h3>
            <p>
                Danin, Chitral, Khyber Pakhtunkhwa, Pakistan.
            </p>

            <h3>🏨 About the Guest House</h3>
            <p>
                Town Inn Guest House is a peaceful accommodation option
                near Chitral city, suitable for travelers and families
                looking for a comfortable stay.
            </p>

            <h3>⭐ What Visitors Can Expect</h3>
            <p>
                Guests can enjoy a convenient location for exploring
                Chitral and its surrounding attractions.
            </p>
        `;

    } else if (hotel === "ayunfort") {

        hotelInformation = `
           

            <div class="hotel-gallery">
                <img src="images/Ayun-fort.1.jfif"
                     alt="Ayun Fort Inn">

                <img src="images/Ayun-fort.2.jfif"
                     alt="Ayun Fort Inn">

                <img src="images/Ayun-fort.3.jfif"
                     alt="Ayun Fort Inn">
            </div>

            <h3>📍 Location</h3>
            <p>
                Ayun, Chitral, Khyber Pakhtunkhwa, Pakistan.
            </p>

            <h3>🏨 About Ayun Fort Inn</h3>
            <p>
                Ayun Fort Inn is located in the beautiful Ayun Valley
                of Chitral. It provides visitors with a convenient base
                for exploring Ayun and the nearby Kalash valleys.
            </p>

            <h3>🌿 Nearby Attractions</h3>
            <p>
                Visitors can explore Ayun Valley, fruit orchards,
                the Chitral River, and the nearby Kalash Valley region.
            </p>
        `;
    }

    const detailsBox = button.parentElement.querySelector(".hotel-details");

    detailsBox.innerHTML = hotelInformation;
    detailsBox.style.display = "block";

}
function showPlace(place, button) {

    let placeInformation = "";

    if (place === "tirichmir") {

        placeInformation = `
            <h2>Tirich Mir</h2>

            <h3>Location</h3>
            <p>
                Tirich Mir is located in the Hindu Kush mountain range
                in Upper Chitral, Khyber Pakhtunkhwa, Pakistan.
            </p>

            <h3>About Tirich Mir</h3>
            <p>
                Tirich Mir is the highest mountain in the Hindu Kush
                range. Its spectacular snow-covered peaks attract
                visitors, photographers, and adventure enthusiasts.
            </p>

            <h3>What Visitors Can Experience</h3>
            <p>
                • Breathtaking mountain scenery<br>
                • Photography<br>
                • Trekking opportunities<br>
                • Natural beauty of the surrounding valleys
            </p>
        `;

    } else if (place === "shandur") {

        placeInformation = `
            <h2>Shandur Pass</h2>

            <h3>Location</h3>
            <p>
                Shandur Pass lies between Chitral and Gilgit-Baltistan
                at a very high altitude.
            </p>

            <h3>About Shandur Pass</h3>
            <p>
                Shandur is famous for its spectacular mountain scenery
                and traditional polo ground. It is widely known for
                the annual Shandur Polo Festival.
            </p>

            <h3>What Visitors Can Experience</h3>
            <p>
                • Traditional polo<br>
                • Mountain views<br>
                • Camping<br>
                • Photography<br>
                • Shandur Polo Festival
            </p>
        `;

    } else if (place === "kalash") {

        placeInformation = `
            <h2>Kalash Valley</h2>

            <h3>Location</h3>
            <p>
                The Kalash valleys are located in Lower Chitral,
                Khyber Pakhtunkhwa, Pakistan.
            </p>

            <h3>About Kalash Valley</h3>
            <p>
                The Kalash valleys are famous for their distinctive
                culture, traditional clothing, music, dances, festivals,
                and beautiful mountain surroundings.
            </p>

            <h3>What Visitors Can Experience</h3>
            <p>
                • Traditional villages<br>
                • Kalash culture and traditions<br>
                • Cultural festivals<br>
                • Traditional music and dances<br>
                • Beautiful mountain scenery
            </p>
        `;

    } else if (place === "fort") {

        placeInformation = `
            <h2>Chitral Fort</h2>

            <h3>Location</h3>
            <p>
                Chitral Fort is located in Chitral city,
                Khyber Pakhtunkhwa, Pakistan.
            </p>

            <h3>About Chitral Fort</h3>
            <p>
                Chitral Fort is a historic landmark associated with
                the history and heritage of Chitral. Its location
                provides visitors with an opportunity to explore
                the area's historical character.
            </p>

            <h3>What Visitors Can Experience</h3>
            <p>
                • Learn about Chitral's history<br>
                • Explore the surrounding area<br>
                • Experience local heritage<br>
                • Enjoy views of the town and nearby mountains
            </p>
        `;
    }

    const detailsBox = button.parentElement.querySelector(".place-details");

    detailsBox.innerHTML = placeInformation;
    detailsBox.style.display = "block";
}
function showTip(tip, button) {

    let tipInformation = "";

    if (tip === "season") {

        tipInformation = `
            <h3>Best Time to Visit</h3>

            <p>
                • Spring is a beautiful time to enjoy greenery and
                pleasant weather.<br>
                • Summer is popular for exploring mountain areas
                and visiting places such as Shandur.<br>
                • Autumn offers beautiful colors and comfortable
                temperatures.<br>
                • Winter can be very cold, especially in higher areas,
                so proper preparation is important.
            </p>
        `;

    } else if (tip === "packing") {

        tipInformation = `
            <h3>What to Pack</h3>

            <p>
                • Comfortable walking or hiking shoes<br>
                • Warm clothes for mountain areas<br>
                • Sunscreen, sunglasses, and a hat<br>
                • Personal medicines and basic first-aid supplies<br>
                • A power bank and necessary phone chargers<br>
                • A reusable water bottle
            </p>
        `;

    } else if (tip === "transport") {

        tipInformation = `
            <h3>Transportation</h3>

            <p>
                • Plan your route before traveling to remote areas.<br>
                • Keep extra travel time because mountain roads can
                take longer than expected.<br>
                • Use suitable vehicles for mountainous routes.<br>
                • Check road and weather conditions before traveling.<br>
                • Keep important contact numbers with you.
            </p>
        `;

    } else if (tip === "culture") {

        tipInformation = `
            <h3>Respect Local Culture</h3>

            <p>
                • Respect local customs and traditions.<br>
                • Dress appropriately when visiting villages and
                cultural sites.<br>
                • Ask permission before photographing local people.<br>
                • Respect religious and cultural places.<br>
                • Avoid disturbing local communities or ceremonies.
            </p>
        `;

    } else if (tip === "safety") {

        tipInformation = `
            <h3>Mountain Safety</h3>

            <p>
                • Check the weather before visiting mountain areas.<br>
                • Follow local guidance when traveling on mountain
                roads or trails.<br>
                • Avoid traveling alone in unfamiliar remote areas.<br>
                • Keep warm clothing with you because temperatures
                can change quickly.<br>
                • Stay hydrated and take breaks during hikes.
            </p>
        `;

    } else if (tip === "money") {

        tipInformation = `
            <h3>Money & Essentials</h3>

            <p>
                • Keep some Pakistani rupees in cash for small
                purchases and remote areas.<br>
                • Carry your identification and important documents.<br>
                • Keep a power bank because charging facilities may
                not always be available.<br>
                • Carry basic medicines and personal necessities.<br>
                • Keep emergency contact numbers available.
            </p>
        `;
    }

    const detailsBox = button.parentElement.querySelector(".tip-details");

    detailsBox.innerHTML = tipInformation;
    detailsBox.style.display = "block";
}