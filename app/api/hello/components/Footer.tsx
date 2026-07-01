export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center px-4">
        <p>Copyright &copy; {new Date().getFullYear()} | [Your Name] | All Rights Reserved</p>
      </div>
    </footer>
  );
}