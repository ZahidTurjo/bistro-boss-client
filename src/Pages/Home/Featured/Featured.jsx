import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
  <div className="mt-24 p-20 mb-4 bg-fixed featured-item text-white font-semibold">
<SectionTitle heading='Feature Menu' subheading='check it out'>
</SectionTitle>
<div className="md:flex justify-center items-center gap-4 py-8 px-16">
    <div className="">
        <img src={featuredimg} alt="" />
    </div>
    <div className="">
        <p>Aug 2, 2020</p>
        <p className="uppercase my-4">Where can i get some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe labore, deleniti consequuntur, tenetur quibusdam, est aperiam sunt quos doloribus. Repellat assumenda inventore atque veniam, eos est voluptates architecto quibusdam eaque magnam sit ipsa voluptatem voluptatum impedit excepturi. 
            Eum et impedit expedita veritatis velit dolores,
             ullam nesciunt mollitia eius.</p>
             <button className="btn btn-outline mt-2 border-0 border-b-4 bg-slate-400">Read More</button>

    </div>
</div>


  </div>


    );
};

export default Featured;