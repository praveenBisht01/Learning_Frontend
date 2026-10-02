import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Card
        image="https://i.pravatar.cc/300?img=12"
        name="Priyanshu"
        about="Frontend Developer | React Learner | Future Full Stack Developer"
      />
      <Card
        image="https://images.unsplash.com/photo-1777149061713-0b73b5bfc3f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="Hitesh"
        about="Data analyst | AI Tools Expert | SQL | PYTHON | POWER BI"
      />
      <Card
        image="https://plus.unsplash.com/premium_photo-1782480922570-d7d92f2a590f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="Priyanka mehra"
        about=" tuition teacher | Child specialist | bakwaas krna mai no 1 | hight 4.1 | from mehra gaon"
      />
      <Card
  image="https://i.pravatar.cc/300?img=45"
  name="Aarav Mehta"
  about="Full Stack Developer | MERN Stack | Loves Building Web Apps"
/>

<Card
  image="https://i.pravatar.cc/300?img=18"
  name="Ananya Sharma"
  about="UI/UX Designer | Figma Expert | Creative Thinker"
/>

<Card
  image="https://i.pravatar.cc/300?img=52"
  name="Rohan Verma"
  about="Backend Developer | Node.js & MongoDB | API Specialist"
/>

<Card
  image="https://i.pravatar.cc/300?img=29"
  name="Sneha Kapoor"
  about="Frontend Developer | React.js | JavaScript Enthusiast"
/>

    </div>
  );
}

export default App;