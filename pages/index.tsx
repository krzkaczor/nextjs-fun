import React from "react";
import { GetServerSideProps } from "next";
import { PrismaClient, Todo } from "@prisma/client";
import { TodoList } from "../components/TodoList";
import { AddTodo } from "../components/AddTodo";

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

  return {
    props: { todos },
  };
};
