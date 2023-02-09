import {
  createBrowserRouter,
  Routes,
  Route,
  redirect,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Departments from "./pages/Departments";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";
import PocketBase from "pocketbase";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import Admins from "./pages/Admins";
import AdminSignup from "./pages/AdminSignUp";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
          loader={({ request }) => {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const isNotAuthenticated = pb.authStore.isValid;
            console.log(isNotAuthenticated);
            if (isNotAuthenticated == false) {
              throw redirect("/login");
            }
            return null;
          }}
        />
        <Route
          path="/departments/:id"
          element={<Departments />}
          loader={({ request }) => {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const isNotAuthenticated = pb.authStore.isValid;
            console.log(isNotAuthenticated);
            if (isNotAuthenticated == false) {
              throw redirect("/login");
            }
            return null;
          }}
        />
         <Route
        path="/signup"
        element={
          <QueryClientProvider client={new QueryClient()}>
            <Signup />
          </QueryClientProvider>
        }
        loader={({ request }) => {
          const pb = new PocketBase("http://127.0.0.1:8090");
          const isNotAuthenticated = pb.authStore.isValid;
          // console.log(pb.authStore.model.id);
          if (isNotAuthenticated == false) {
            throw redirect("/login");
          }
          return null;
        }}
      />
         <Route
        path="/admin-signup"
        element={
          <QueryClientProvider client={new QueryClient()}>
            <AdminSignup />
          </QueryClientProvider>
        }
        loader={({ request }) => {
          const pb = new PocketBase("http://127.0.0.1:8090");
          const isNotAuthenticated = pb.authStore.isValid;
          // console.log(pb.authStore.model.id);
          if (isNotAuthenticated == false) {
            throw redirect("/login");
          }
          return null;
        }}
      />
        <Route
          path="/admins"
          element={<Admins />}
          loader={({ request }) => {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const isNotAuthenticated = pb.authStore.isValid;
            console.log(isNotAuthenticated);
            if (isNotAuthenticated == false) {
              throw redirect("/login");
            }
            return null;
          }}
        />
        <Route
          path="/users"
          element={<Users />}
          loader={({ request }) => {
            const pb = new PocketBase("http://127.0.0.1:8090");
            const isNotAuthenticated = pb.authStore.isValid;
            console.log(isNotAuthenticated);
            if (isNotAuthenticated == false) {
              throw redirect("/login");
            }
            return null;
          }}
        />

      </Route>
      <Route
        path="/login"
        element={<Login />}
        loader={({ request }) => {
          const pb = new PocketBase("http://127.0.0.1:8090");
          const isNotAuthenticated = pb.authStore.isValid;
          console.log(pb.authStore.isValid);
          if (isNotAuthenticated) {
            throw redirect("/");
          }
          return null;
        }}
      />
     
    </Route>
  )
);
{
  /* 

const redirectIfUserIsNotAuthenticated =  async({request}) => {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const isAuthenticated =  pb.authStore.token != null
  if (isAuthenticated) {
    return redirect("/login")
  }
}

const redirectIfUserIsAuthenticated =  async({request}) => {
  const pb = new PocketBase("http://127.0.0.1:8090")
  const isNotAuthenticated =  pb.authStore.token == null
  if (isNotAuthenticated) {
    return redirect("/")
  }
} */
}

export default router;
