import { useGetContactQuery } from "../redux/api/contactSlice";

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactQuery();

  if (isLoading) {
    return <span className="text-center block py-10">Loading contacts...</span>;
  }

  if (error) {
    return (
      <span className="text-red-500 text-center block py-10">
        Error fetching contacts: {error.message}
      </span>
    );
  }

  return (
    <div className="container mx-auto px-7 md:px-16 lg:px-36 w-full py-[10rem]">
      <h2 className="text-3xl font-bold text-center mb-6">Contact List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">
              {contact.firstName} {contact.lastName}
            </h3>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Message:</strong> {contact.message}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>School:</strong> {contact.school}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>City:</strong> {contact.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
