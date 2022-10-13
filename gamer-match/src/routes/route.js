import React, { lazy } from 'react'
import { HomeRedirect } from './RouteController'
import RouteController from './RouteController'
import Cards from '../components/views/Cards/Cards'
const Dashboard = lazy(() => import('../components/views/Dashboard'))
const Login = lazy(() => import('../components/views/Login'))
const Register = lazy(() => import('../components/views/Register'))


const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/register",
        exact: true,
        render: props => <Register {...props} />
    },
    
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
            
        ]
    },
]

   

export default routes