import React from "react";


const AdminAppointments = () => {
  const appointments = [
    {
      _id: "1",
      doctorId: {
        pic: "https://example.com/doctor1.jpg",
        firstname: "John",
        lastname: "Smith",
      },
      userId: {
        pic: "https://example.com/user1.jpg",
        firstname: "Jane",
        lastname: "Doe",
      },
      date: "2022-12-31",
      time: "10:00 AM",
      createdAt: "2022-12-30T15:30:00.000Z",
      updatedAt: "2022-12-31T09:45:00.000Z",
      status: "Pending",
    },
    {
      _id: "2",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    {
      _id: "3",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    {
      _id: "4",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    {
      _id: "5",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    {
      _id: "7",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    {
      _id: "8",
      doctorId: {
        pic: "https://example.com/doctor2.jpg",
        firstname: "Sarah",
        lastname: "Johnson",
      },
      userId: {
        pic: "https://example.com/user2.jpg",
        firstname: "Michael",
        lastname: "Brown",
      },
      date: "2023-01-05",
      time: "2:30 PM",
      createdAt: "2023-01-04T11:15:00.000Z",
      updatedAt: "2023-01-05T14:00:00.000Z",
      status: "Completed",
    },
    
  ];
  

  return (
    <>
      {
        <section className="user-section">
          {
            <div className="user-container">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Lawyer</th>
                    <th>Client</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Status</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments?.map((ele, i) => {
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        <td>
                          {ele?.doctorId?.firstname +
                            " " +
                            ele?.doctorId?.lastname}
                        </td>
                        <td>
                          {ele?.userId?.firstname + " " + ele?.userId?.lastname}
                        </td>
                        <td>{ele?.date}</td>
                        <td>{ele?.time}</td>
                        <td>{ele?.createdAt.split("T")[0]}</td>
                        <td>{ele?.updatedAt.split("T")[1].split(".")[0]}</td>
                        <td>{ele?.status}</td>
                        <td>
                          <button
                            className={`btn user-btn accept-btn ${
                              ele?.status === "Completed" ? "disable-btn" : ""
                            }`}
                            
                          >
                            Complete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          }
        </section>
      }
    </>
  );
};

export default AdminAppointments;
