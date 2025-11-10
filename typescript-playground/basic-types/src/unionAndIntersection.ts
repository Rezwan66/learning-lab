// Union - | - OR - Ekta na hoile onnota hobe

type UserRole = 'admin' | 'user'; // union of literal type

const getDashboard = (role: UserRole) => {
  if (role === 'admin') {
    return 'Admin Dashboard';
  } else if (role === 'user') {
    return 'User Dashboard';
  } else {
    return 'Homepage';
  }
};

getDashboard('guest');

// Intersection - & - AND - Shob kichu ekshathe nia asha

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

// A manager is also a employee, so we can make a new type

type EmployeeManager = Employee & Manager;

const chowdhuryShaheb: EmployeeManager = {
  id: '123',
  name: 'Chowdhury Shaheb',
  phoneNo: '017800000',
  designation: 'Manager',
  teamSize: 500,
};
