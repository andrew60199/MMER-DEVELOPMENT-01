import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      terms
      role
    }
  }
`;

export const QUERY_CLIENT = gql`
  query client {
    client {
      _id
      userId
      paymentMethod
      prepaidHours
      projects {
        _id
        name
        description
        createdAt
        stage
        totalHours
        links
        allocations {
          _id
          date
          requestedHours
          actualHours
          employee
          job
          zoomLink
          status
          progressReport
        }
        developers
      }
    }
  }
`;

export const QUERY_EMPLOYEE = gql`
  query employee {
    employee {
      _id
      userId
      bankDetails
      availability {
        _id
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
      schedule {
        _id
        date
        requestedHours
        actualHours
        employee
        job
        zoomLink
        status
        progressReport
      }
      paychecks {
        _id
        date
        hourlyRate
        hours
      }
      skills
      team
    }
  }
`;