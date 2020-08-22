import {createServer, Model} from 'miragejs';

export default function () {
  createServer({
    models: {
      artwork: Model,
    },

    seeds(server) {
      server.create('artwork', {
        title: 'Deer Mount on A Brick Wall',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5dbf2bad4b488a001c008c1d/image/5dbf2bad4b488a001c008c1e/medium/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Reality',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5dbf2dcc4b488a001c00aba5/image/5dbf2dcc4b488a001c00aba6/medium/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 100,
      });
      server.create('artwork', {
        title: 'Desert Sunset',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5dbf2fb8c51168001c61240d/image/5dbf2fb8c51168001c61240e/medium/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 300,
      });
      server.create('artwork', {
        title: 'Visitor becomes the Artist!',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bebf4792c88122db5e4c1e1/image/5bebf4792c88122db5e4c1e2/thumbnail/photo.jpeg',
          width: 256,
          height: 233,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Turtle and Two Blues',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bbf88104bdf812645606347/image/5bbf88104bdf812645606348/thumbnail/photo.jpeg',
          width: 256,
          height: 130,
        },
        description: '',
        price: 500,
      });
      server.create('artwork', {
        title: 'Looking Forward',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bbf88564bdf812645606354/image/5bbf88564bdf812645606355/thumbnail/photo.jpeg',
          width: 256,
          height: 182,
        },
        description: '',
        price: 5300,
      });
      server.create('artwork', {
        title: 'Champion',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5be59b452c88122db5911311/image/5be59b452c88122db5911312/thumbnail/photo.jpeg',
          width: 205,
          height: 256,
        },
        description: '',
        price: 1000,
      });
      server.create('artwork', {
        title: 'Woman Waiting for Flight',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5be5d07d2c88122db594e29a/image/5be5d07d2c88122db594e29b/thumbnail/photo.jpeg',
          width: 205,
          height: 256,
        },
        description: '',
        price: 1000,
      });
      server.create('artwork', {
        title: 'Mr. Yonko',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5be8d6322c88122db5ba1dbf/image/5be8d6322c88122db5ba1dc0/thumbnail/photo.jpeg',
          width: 171,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Light Loafer',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bdca72c2c88122db53d8b0f/image/5bdca72c2c88122db53d8b10/medium/photo.jpeg',
          width: 195,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Moments of clarity in a sea of distraction',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5becd9732c88122db5fcc9c6/image/5becd9732c88122db5fcc9c7/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 100,
      });
      server.create('artwork', {
        title: 'Memory',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bed98152c88122db50ee066/image/5bed98152c88122db50ee067/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 200,
      });
      server.create('artwork', {
        title: 'Red poppies',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bebf5d92c88122db5e4d91f/image/5bebf5d92c88122db5e4d920/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 300,
      });
      server.create('artwork', {
        title: 'A smoke with Megan',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bec779a2c88122db5f0e16d/image/5bec779a2c88122db5f0e16e/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Man Cave Electric',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5be330e72c88122db577f941/image/5be330e72c88122db577f942/thumbnail/photo.jpeg',
          width: 249,
          height: 256,
        },
        description: '',
        price: 400,
      });
      server.create('artwork', {
        title: 'Afterbirth of A Nation',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bc6672e4bdf812645a609bb/image/5bc6672e4bdf812645a609bc/thumbnail/photo.jpeg',
          width: 192,
          height: 256,
        },
        description: '',
        price: 200,
      });
      server.create('artwork', {
        title: 'Opus',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bbfc0f74bdf81264563603b/image/5bbfc0f74bdf81264563603c/thumbnail/photo.jpeg',
          width: 256,
          height: 190,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Unfinished Business',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bb2dce959f9f623e3f49445/image/5bb2dce959f9f623e3f49446/thumbnail/photo.jpeg',
          width: 256,
          height: 193,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Saturday I',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bb9121759f9f623e319d438/image/5bb9121759f9f623e319d439/thumbnail/photo.jpeg',
          width: 160,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Jacques X’s 2 # Robot',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bb67cc559f9f623e30d51d1/image/5bb67cc559f9f623e30d51d2/thumbnail/photo.jpeg',
          width: 167,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'The Weaving of Fates',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5bb90fcc59f9f623e319c4fa/image/5bb90fcc59f9f623e319c4fb/thumbnail/photo.jpeg',
          width: 256,
          height: 197,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Transition',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba66ac01b86bf100085b75b/image/5ba66ac01b86bf100085b75c/thumbnail/photo.jpeg',
          width: 256,
          height: 198,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'mujer naravila',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba46d021b86bf1000726815/image/5ba46d021b86bf1000726816/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Passion',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba551a81b86bf10007bb4ce/image/5ba551a81b86bf10007bb4cf/thumbnail/photo.jpeg',
          width: 256,
          height: 247,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Capitol Washington DC',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba3cb121b86bf100066a6ac/image/5ba3cb121b86bf100066a6ad/thumbnail/photo.jpeg',
          width: 172,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Canada',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba7c2531b86bf1000928e9f/image/5ba7c2531b86bf1000928ea0/thumbnail/photo.jpeg',
          width: 205,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'USA',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba7c3931b86bf1000929a82/image/5ba7c3931b86bf1000929a83/thumbnail/photo.jpeg',
          width: 256,
          height: 207,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'America up in smoke',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba7d5c11b86bf100093af6c/image/5ba7d5c11b86bf100093af6d/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'Tippy the wonder dog',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5ba7d8981b86bf100093c04d/image/5ba7d8981b86bf100093c04e/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
      server.create('artwork', {
        title: 'tra buio eluce',
        image: {
          url:
            'https://nymoca-user-images.s3.amazonaws.com/production/artwork/5b9f62591b86bf1000218c87/image/5b9f62591b86bf1000218c88/thumbnail/photo.jpeg',
          width: 256,
          height: 256,
        },
        description: '',
        price: 50,
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/artworks', (schema, request) => {
        return schema.artworks.all();
      });
    },
  });
}
