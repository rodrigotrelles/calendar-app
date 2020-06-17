// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weather: {
    key: 'b09bdbaf254cb8cc8863af6c138c2043',
    url: 'http://api.openweathermap.org/data/2.5/forecast',
    params: {
      city: 'q=',
      id: 'appid='
    }
  }
};
