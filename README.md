# React Native Restaurant Search App

This is a simple React Native application that allows users to search for restaurants using the Yelp API.

## Features

- **Search Bar:** Users can enter a search term to find restaurants.
- **Filtering:** Results can be filtered by price range.
- **Results Display:** Restaurants are displayed in three categories based on price range: Cost Effective, Bit Pricier, and Big Spender.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

git clone <repository_url>


2. Install dependencies:

npm install


3. Set up Yelp API access:
- Obtain API credentials from [Yelp Developer](https://www.yelp.com/developers).
- Create a `.env` file in the root directory.
- Add your Yelp API key to the `.env` file:

  ```
  YELP_API_KEY=your_api_key_here
  ```

4. Start the application:

npm start


## Dependencies

- `@react-navigation/native`: For navigation within the application.
- `@react-navigation/native-stack`: Stack navigation for React Native.
- `expo`: Development framework for React Native applications.
- `expo/vector-icons`: Icon library for React Native.
- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building mobile applications using JavaScript and React.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
