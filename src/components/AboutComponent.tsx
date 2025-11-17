import teamWorkingImage from "@/assets/team-working.jpg";

const AboutComponent = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header & Intro */}
        <div className="mb-12 space-y-6">
          {/* Pre-headline */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-muted-foreground text-sm font-montserrat">Why Choose Us</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight">
            Transforming <span className="text-primary">ideas</span>
            <br />
            <span className="text-primary">into Digital Reality</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm sm:text-base text-foreground leading-relaxed font-montserrat">
            SachTech Solution Private Limited, incorporated on August 11, 2016 under the Companies Act, 2013 (CIN: U72900CH2016PTC041177), is a leading technology company headquartered in Mohali, India. Driven by a team of passionate and innovative young entrepreneurs, SachTech has established a strong presence in the global IT industry. We proudly serve clients across multiple countries, including the USA, Canada, UK, Brazil, Spain, Malaysia, UAE, Egypt, Australia, Finland, and many others. Specializing in custom software development, mobile applications, and comprehensive web solutions, we are dedicated to transforming our clients' visions into tangible, high-quality products. Our core mission is to build robust, scalable, and innovative technology that delivers measurable results and helps businesses thrive in the digital age.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 gap-4"> {/* MODIFIED: Removed auto-rows-[200px] */}
          {/* Cell 1: The Image (2x2) */}
          <div className="col-span-4 md:col-span-2 row-span-2 rounded-[var(--radius)] overflow-hidden">
            <img 
              src={teamWorkingImage} 
              alt="Team members collaborating at computer" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cell 2: Our Mission (2x1) */}
          <div className="col-span-4 md:col-span-2 row-span-1 rounded-[var(--radius)] bg-muted p-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-poppins">Our Mission</h3>
            <p className="text-foreground leading-relaxed font-montserrat text-sm lg:text-md">
              We design and execute market-leading performance roadmaps by blending creative thinking, technological expertise, and global reach. Our goal is to eliminate the gap between client needs and our solutions—achieving complete alignment through continuous innovation.
            </p>
          </div>

          {/* Cell 3: Our Vision (2x1) */}
          <div className="col-span-4 md:col-span-2 row-span-1 rounded-[var(--radius)] bg-muted p-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-poppins ">Our Vision</h3>
            <p className="text-foreground leading-relaxed font-montserrat text-sm lg:text-md">
              To be a globally recognized leader in IT solutions, known for our commitment to excellence, integrity, and client success.
            </p>
          </div>

          {/* Cell 4: Company Culture (2x2) */}
          <div className="col-span-4 md:col-span-2 row-span-2 rounded-[var(--radius)] bg-muted p-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-poppins">Our Culture</h3>
            <p className="text-foreground leading-relaxed font-montserrat text-sm lg:text-md ">
              At SachTech, we take pride in fostering a culture of integrity, collaboration, and social responsibility. We are dedicated to creating a positive impact in the communities where we live and work, while continuously striving to make technology accessible and beneficial for all.
              <br/>
              <br/>
              We believe in continuous learning and provide our team with the resources to grow both personally and professionally. Our open-door policy encourages transparent communication, and we celebrate diverse perspectives, knowing that the best ideas can come from anywhere.            </p>
          </div>

          {/* Cell 5: Team Members Stat (1x1) - Pop Cell */}
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[var(--radius)] bg-primary p-4 sm:p-6 flex flex-col items-center justify-center text-center"> {/* MODIFIED */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-poppins mb-2">14+</div> {/* MODIFIED */}
            <div className="text-xs sm:text-sm text-primary-foreground font-montserrat">Years Of Experience</div> {/* MODIFIED */}
          </div>

          {/* Cell 6: Happy Clients Stat (1x1) - Pop Cell */}
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[var(--radius)] bg-primary p-4 sm:p-6 flex flex-col items-center justify-center text-center"> {/* MODIFIED */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-poppins mb-2">300+</div> {/* MODIFIED */}
            <div className="text-xs sm:text-sm text-primary-foreground font-montserrat">Happy Clients</div> {/* MODIFIED */}
          </div>

          {/* Cell 7: Client Satisfaction Stat (1x1) - Pop Cell */}
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[var(--radius)] bg-primary p-4 sm:p-6 flex flex-col items-center justify-center text-center"> {/* MODIFIED */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-poppins mb-2">99%</div> {/* MODIFIED */}
            <div className="text-xs sm:text-sm text-primary-foreground font-montserrat">Client Satisfaction</div> {/* MODIFIED */}
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 rounded-[var(--radius)] bg-primary p-4 sm:p-6 flex flex-col items-center justify-center text-center"> {/* MODIFIED */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-poppins mb-2">50+</div> {/* MODIFIED */}
            <div className="text-xs sm:text-sm text-primary-foreground font-montserrat">Team Members</div> {/* MODIFIED */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;