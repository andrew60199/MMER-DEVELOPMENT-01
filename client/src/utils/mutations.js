import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!, $terms: Boolean!) {
        addUser(name: $name, email: $email, password: $password, terms: $terms) {
            token
            user {
                _id
                name
            }
        }
    }
`;

