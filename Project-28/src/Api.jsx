export function fetchUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Eldor", role: "Frontend" },
          { id: 2, name: "Kimdur", role: "Backend" }
        ]);
      }, 500);
    });
  }
  