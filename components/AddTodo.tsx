export function AddTodo() {
  return (
    <div>
      <h2>Add Todo</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

async function handleSubmit(e: any) {
  e.preventDefault();
  
  try {
    const data = { name: "test123" };

    const rawResponse = await fetch("/api/todo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await rawResponse.json();

    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
