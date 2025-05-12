import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const RomanNumerals = () => {
  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/mathematics/symbols">symbols Tool</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Roman Numerals</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="roman-numerals-explanation-container bg-white/40 dark:bg-transparent mx-auto max-w-[900px]">
        <h2 className="roman-numerals-header text-center text-2xl font-bold mb-4">
          Roman Numerals
        </h2>

        <Card className="p-6 glass-card">
          <h3 className="text-lg font-medium mb-2">What Are Roman Numerals?</h3>
          <p>
            <strong>Roman numerals</strong> are a system of numerical notation that originated in ancient Rome and were used throughout the Roman Empire in various aspects of daily life. These numerals are still used today in certain contexts, such as in the numbering of book chapters, clock faces, and dates in certain events.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Roman Numeral Symbols</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>I</strong> – 1</li>
            <li><strong>V</strong> – 5</li>
            <li><strong>X</strong> – 10</li>
            <li><strong>L</strong> – 50</li>
            <li><strong>C</strong> – 100</li>
            <li><strong>D</strong> – 500</li>
            <li><strong>M</strong> – 1000</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Roman Numeral Rules</h3>
          <p>
            Roman numerals follow specific rules for combining these symbols to represent numbers:
          </p>
          <ul className="list-decimal pl-5 space-y-2">
            <li><strong>Repetition:</strong> Roman numerals are repeated to add values. For example, <strong>III</strong> represents 3 (1+1+1).</li>
            <li><strong>Subtraction:</strong> If a smaller numeral appears before a larger one, it is subtracted. For example, <strong>IV</strong> represents 4 (5-1), and <strong>IX</strong> represents 9 (10-1).</li>
            <li><strong>Addition:</strong> If a smaller numeral appears after a larger one, it is added. For example, <strong>VI</strong> represents 6 (5+1), and <strong>XI</strong> represents 11 (10+1).</li>
            <li><strong>Placement:</strong> The numeral for 5 (V) precedes a smaller numeral to subtract (IV for 4), and it follows a smaller numeral to add (VI for 6).</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Examples in Use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>IV</strong> – 4 (5-1)</li>
            <li><strong>IX</strong> – 9 (10-1)</li>
            <li><strong>XL</strong> – 40 (50-10)</li>
            <li><strong>LXX</strong> – 70 (50+10+10)</li>
            <li><strong>CXX</strong> – 120 (100+10+10)</li>
            <li><strong>CC</strong> – 200 (100+100)</li>
            <li><strong>MDCCCLXXXVIII</strong> – 1888 (1000+500+100+100+100+10+10+10+5+1+1)</li>
            <li><strong>MMXXI</strong> – 2021 (1000+1000+10+10+1)</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Why Roman Numerals Matter</h3>
          <p>
            Roman numerals serve as an important part of historical and cultural heritage. While they are no longer used for most daily arithmetic, they are still seen in many contexts today. Understanding Roman numerals is essential for reading historical texts, understanding certain systems like clock faces, and even interpreting certain elements in modern times, like movie release years (e.g., MMXXI for 2021).
          </p>
          <h3 className="text-lg font-medium mb-2">Roman Numerals in Historical Context</h3>
  <p>
    Roman numerals were not only used in daily life but also played a key role in the structure of Roman society. The ancient Romans employed Roman numerals for a variety of purposes, including for counting, measuring, and recording important events. These symbols were seen in inscriptions, documents, public buildings, and monuments. 
  </p>
  <p>
    In ancient Rome, numbers were often written in capitals, and it was common to see numerals etched into stone or written on parchment. The system itself was adopted and spread throughout the Roman Empire, where it was used in military, legal, and commercial contexts.
  </p>
  
  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Architecture and Engineering</h3>
  <p>
    Roman numerals are commonly found in architecture, particularly in the construction of clocks, bridges, and public structures. The use of Roman numerals in clock faces is one of the most recognizable examples today. For centuries, these numerals adorned clocks in towers, churches, and civic buildings, where they were used to mark the hours. In fact, the clock face with Roman numerals remains one of the most enduring symbols of timekeeping.
  </p>
  <p>
    In Roman architecture, numerals were also used for counting, measurement, and organizing the structure of buildings. For example, Roman architects used numerals in inscriptions to mark the completion of specific sections of large projects like aqueducts and roads. These inscriptions were often found in public spaces to commemorate monumental engineering feats, such as the Colosseum or the Pantheon.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Modern Times</h3>
  <p>
    While Roman numerals are no longer used for everyday calculations, they still hold an important place in modern life. They are employed in various fields, from cinema and sports to copyright and book publishing.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Movies:</strong> Roman numerals are frequently used in movie sequels and franchise titles, such as "Rocky II," "Star Wars Episode IV," and "The Godfather Part III." These numerals help distinguish films in a series and give a sense of continuity and tradition.</li>
    <li><strong>Sports:</strong> In the world of sports, especially in the Olympics and the Super Bowl, Roman numerals are used to denote the year or edition of a competition. For example, the 2020 Summer Olympics were officially referred to as "Tokyo 2020" with a Roman numeral logo for its 32nd edition (XXXII).</li>
    <li><strong>Clock Faces:</strong> Roman numerals remain a staple of many traditional clock faces. While digital clocks have largely replaced mechanical clocks, Roman numeral clock faces still convey a sense of timelessness and classical elegance.</li>
    <li><strong>Copyrights and Legal Documents:</strong> Roman numerals are often used in legal and contractual documents to list sections or parts. For example, in contracts, Roman numerals are used to designate the main articles or clauses to maintain organization and formality.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Mathematics</h3>
  <p>
    While Roman numerals are not ideal for mathematical operations, they did play a role in early mathematical texts. Roman numerals are not suited for complex calculations, but they were used to denote important numbers and values in ancient Roman mathematical documents, such as in the writings of prominent mathematicians like Euclid and Ptolemy. Roman numerals were used in astronomical charts and records as well.
  </p>
  <p>
    Today, Roman numerals continue to serve a symbolic function in mathematics. For example, Roman numerals are used to denote centuries (e.g., the 21st century as XXI century) and certain geometric or historical numbering systems. However, more advanced mathematical notation, such as Arabic numerals (0-9), has largely replaced Roman numerals in modern equations and calculations.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals vs. Other Numeral Systems</h3>
  <p>
    Roman numerals are often compared to other numeral systems like the Hindu-Arabic numeral system (0-9), the Chinese numeral system, and the Mayan numeral system. While Roman numerals were adequate for basic counting, they are less versatile for mathematical operations such as multiplication and division.
  </p>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Hindu-Arabic Numerals:</strong> The most widely used numeral system today, Hindu-Arabic numerals (0, 1, 2, 3, etc.), is a positional decimal system that allows for easy arithmetic calculations. Unlike Roman numerals, which have no zero and require additional symbols to represent larger numbers, Hindu-Arabic numerals simplify the representation of large and small values.</li>
    <li><strong>Chinese Numerals:</strong> The Chinese numeral system uses characters that are both logographic (each character represents a concept or object) and numeric. While similar to Roman numerals in their symbolic nature, Chinese numerals are often used in combination with other notations, such as counting rods, to represent larger values.</li>
    <li><strong>Mayan Numerals:</strong> The Mayan numeral system, based on a vigesimal (base-20) system, is quite different from Roman numerals. It uses a combination of dots, bars, and shell symbols to represent numbers. This system was particularly effective for recording dates and astronomical observations in the ancient Maya civilization.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Fun Facts About Roman Numerals</h3>
  <ul className="list-disc pl-5 space-y-2">
    <li><strong>Zero Doesn't Exist in Roman Numerals:</strong> Roman numerals don't have a symbol for zero, unlike the Hindu-Arabic system. This can make calculations and representations of numbers like 0 or negative numbers difficult.</li>
    <li><strong>Roman Numerals and Movies:</strong> As mentioned earlier, Roman numerals are commonly used in movie titles, especially for sequels or installments. Interestingly, the first "Star Wars" movie, which was released in 1977, was later labeled "Star Wars: Episode IV – A New Hope," using Roman numerals for its episodic numbering.</li>
    <li><strong>Roman Numerals in the Super Bowl:</strong> The Super Bowl has been using Roman numerals since the 1969 game (Super Bowl III). For instance, the 50th Super Bowl (held in 2016) used the numeral "L" (50 in Roman numerals), while the 100th game (Super Bowl 100) will be represented as "C."</li>
    <li><strong>Roman Numerals and the Vatican:</strong> In the Vatican City, the year of a Pope's election is sometimes marked using Roman numerals. Pope John Paul II, for example, was referred to as "Ioannes Paulus II" in Latin, with "II" as his numeral title.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Converting Roman Numerals to Decimal</h3>
  <p>
    Converting Roman numerals to decimal values involves understanding the basic rules of Roman numeral formation. To convert a Roman numeral to a number, you follow these steps:
  </p>
  <ul className="list-decimal pl-5 space-y-2">
    <li>Start from the leftmost numeral and move towards the right, adding the values of each numeral.</li>
    <li>If a numeral is followed by one of equal or greater value, add its value. If a numeral is followed by one of lesser value, subtract the lesser value from the greater one.</li>
    <li>For example, to convert <strong>IX</strong> to decimal, subtract 1 from 10 to get 9.</li>
    <li>For larger numbers like <strong>MMXXI</strong> (2021), add the values of the numerals as follows: 1000 + 1000 + 10 + 10 + 1 = 2021.</li>
  </ul>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Computing and Technology</h3>
  <p>
    While Roman numerals are largely relegated to traditional contexts, they still find some usage in computing and technology. For example, some programming languages or algorithms may use Roman numerals as part of certain serialization or data storage formats. Additionally, Roman numerals are used in versioning systems to indicate major releases or updates of software, particularly when the software version has reached significant milestones.
  </p>
  <h3 className="text-lg font-medium mb-2">Roman Numerals in Early Modern Europe</h3>
  <p>
    The use of Roman numerals persisted long after the fall of the Roman Empire. In fact, they played an essential role in Europe throughout the Middle Ages and into the Early Modern period. During this time, Roman numerals were used in manuscripts, academic texts, and official records. The numeral system was adopted by various European monarchies and empires, notably the Holy Roman Empire, as a way to organize important documents and legal decrees.
  </p>
  <p>
    In the medieval period, Roman numerals became part of the curriculum in educational institutions. Scholars learned to read and write using the Roman numeral system alongside Latin, the language of scholarship at the time. Many ancient texts were written using Roman numerals, and the system continued to be used for the numbering of kings, monarchs, and popes.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals and the Renaissance</h3>
  <p>
    During the Renaissance, a period marked by a resurgence of interest in classical antiquity, Roman numerals experienced a revival. Scholars and artists looked back to the works of Ancient Rome for inspiration, and many embraced Roman numerals as a symbol of Roman culture and learning. 
  </p>
  <p>
    In particular, Roman numerals were often used in Renaissance art and architecture. Famous buildings like St. Peter’s Basilica in the Vatican, designed by Michelangelo and others, feature Roman numeral inscriptions as a nod to ancient Rome's influence. The Renaissance also saw the creation of many historical texts that utilized Roman numerals, such as chronologies and genealogies, where numerals helped order the sequence of events.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Cartography</h3>
  <p>
    During the Age of Exploration, Roman numerals were also employed in the field of cartography. Many early maps and globes created during the Renaissance and into the 18th century used Roman numerals to represent longitude and latitude degrees. In this context, Roman numerals helped convey geographic data in a way that aligned with classical principles.
  </p>
  <p>
    Additionally, early explorers used Roman numerals in the titles of their voyages and to denote the chronology of events. For example, the famous maps of the world produced by Ptolemy and other ancient geographers used Roman numerals to organize regions and sections of the globe.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Coins and Money</h3>
  <p>
    In ancient Rome, Roman numerals were used to identify the value of coins and currencies. Roman coinage was often stamped with numerals representing the denomination, such as "X" for 10 and "C" for 100. Over time, as the Roman Empire expanded, Roman numerals became a consistent way of communicating coin values across the empire’s vast territories.
  </p>
  <p>
    Today, Roman numerals are still used in certain numismatic practices. Collectors and historians often use Roman numerals to identify coins from different periods in history. For example, the famous "denarius" coin used in ancient Rome often had its value inscribed using Roman numerals.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Modern Pop Culture</h3>
  <p>
    Roman numerals continue to enjoy a presence in modern pop culture. As mentioned previously, they are often used to mark significant moments in films, books, and even video games. The cinematic world, in particular, has embraced Roman numerals in titles for major movie series.
  </p>
  <p>
    For example, the "James Bond" film series uses Roman numerals to denote the number of the movie, starting with "Dr. No" (the first James Bond movie), and continuing all the way through to "Die Another Day" (the 20th Bond film). Similarly, popular franchises such as “The Fast and the Furious” also use Roman numerals to number their sequels. 
  </p>
  <p>
    The use of Roman numerals in pop culture extends beyond movies. Many book series and games, particularly those with historical or epic themes, use Roman numerals for chapter numbering or to denote sections in large volumes. Even sports teams sometimes use Roman numerals to highlight key matches or events. For example, the FIFA World Cup often uses Roman numerals to indicate the edition of the tournament (e.g., "World Cup XIV" for the 14th edition).
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Technology and Computing</h3>
  <p>
    In the world of technology, Roman numerals also have a niche usage. For instance, some computer programming environments use Roman numerals in versioning schemes to mark major revisions or milestones. This practice is common in software updates for high-profile products and systems where major releases are often denoted using Roman numerals to give a sense of prestige or significance.
  </p>
  <p>
    The Apple Inc. operating system, iOS, used Roman numerals in its version naming for many years. For example, “iOS 10” was followed by “iOS XI” and “iOS XII,” continuing the tradition of using Roman numerals for key version updates.
  </p>
  <p>
    Similarly, the use of Roman numerals appears in certain programming languages or digital clocks in the form of string formatting or custom countdown timers, often as a stylistic choice to evoke a sense of nostalgia or a classical theme.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Music and Composition</h3>
  <p>
    Roman numerals play a crucial role in music theory, specifically in the context of chord analysis and harmony. In classical music, Roman numerals are used to represent chords in a key. These numerals indicate the position of a chord within a scale and denote whether the chord is major, minor, or diminished.
  </p>
  <p>
    For instance, in the key of C major, the I chord would be C major, the IV chord would be F major, and the V chord would be G major. The use of Roman numerals in this context allows musicians to easily analyze and communicate chord progressions across different keys, as the numerals represent the relative position of the chord rather than a specific note or tone.
  </p>
  <p>
    This system of Roman numeral chord analysis is still widely used in modern music theory and composition, helping both composers and performers work with complex musical structures. Musicians often use Roman numerals to describe a chord progression's structure, whether it's a simple I-IV-V pattern or a more advanced progression like ii-V-I.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in Religion and Spirituality</h3>
  <p>
    Roman numerals have deep roots in religious contexts, particularly within Christianity. The use of Roman numerals is common in the Church, where they appear in the numbering of Popes and in the enumeration of important events or councils. The Papacy itself is numbered using Roman numerals, with each Pope's regnal number following their papal name.
  </p>
  <p>
    In the context of the Catholic Church, Roman numerals are also used to indicate the liturgical calendar. Key dates in the Church's history, such as the celebration of saints or feasts, are often marked using Roman numerals to maintain tradition and formality. For example, the Roman Catholic Church's official calendar of saints includes numbers in Roman numerals to denote specific feast days and the years of major events in the Church’s history.
  </p>

  <h3 className="text-lg font-medium mt-6 mb-2">Roman Numerals in the Military</h3>
  <p>
    Throughout history, Roman numerals have also had a strong presence in military contexts. The Roman Empire, known for its military prowess, used Roman numerals to identify the ranks of soldiers, the order of battle, and key military units. In the modern military, Roman numerals continue to be used in official documents, unit designations, and in naming key battles or military operations.
  </p>
  <p>
    For example, many of the major World War II campaigns and battles, like the “Operation Overlord” or “Battle of Normandy,” were numbered using Roman numerals to emphasize their historical significance. Roman numerals were also used to identify military divisions and groups, where they conveyed the rank and importance of specific military entities.
  </p>
        </Card>
      </div>
    </>
  );
};
