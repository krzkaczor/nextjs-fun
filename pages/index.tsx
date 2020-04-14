import React from "react";
import { GetServerSideProps } from "next";
import { TodoList } from "../components/TodoList";
import { AddTodo } from "../components/AddTodo";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface SSP {
  todos: Todo[];
}

export default function Index(props: SSP) {
  return (
    <div>
      <h1>Todo app:</h1>
      <TodoList {...props} />

      <AddTodo />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const todos = await prisma.todo.findMany({
    orderBy: { name: "asc" },
    where: { done: false },
  });
  // OR
  // const todos = await prisma.raw<Todo[]>('SELECT * FROM "Todo" WHERE done=false ORDER BY name')

  return {
    props: { todos },
  };
};
