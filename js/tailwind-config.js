tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            display: ['Poppins', 'sans-serif'],
            body: ['DM Sans', 'sans-serif'],
          },
          colors: {
            brand: {
              50:  '#eef3ff',
              100: '#dce7ff',
              200: '#b2c9ff',
              300: '#769dff',
              400: '#3366ff',
              500: '#1a4dff',
              600: '#0a32e8',
              700: '#0825bb',
              800: '#0b1e8f',
              900: '#0d1d6f',
              950: '#060d3d',
            },
            accent: '#00e5ff',
          },
          backgroundImage: {
            'mesh-light': 'radial-gradient(at 20% 20%, #dce7ff 0%, transparent 55%), radial-gradient(at 80% 80%, #eef3ff 0%, transparent 55%), radial-gradient(at 50% 10%, #b2c9ff 0%, transparent 45%)',
            'mesh-dark':  'radial-gradient(at 20% 20%, #0825bb33 0%, transparent 55%), radial-gradient(at 80% 80%, #060d3d 0%, transparent 55%), radial-gradient(at 50% 10%, #0a32e833 0%, transparent 45%)',
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'fade-up': 'fadeUp 0.6s ease forwards',
            'slide-in': 'slideIn 0.5s ease forwards',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%':       { transform: 'translateY(-18px)' },
            },
            fadeUp: {
              from: { opacity: '0', transform: 'translateY(24px)' },
              to:   { opacity: '1', transform: 'translateY(0)' },
            },
            slideIn: {
              from: { opacity: '0', transform: 'translateX(-20px)' },
              to:   { opacity: '1', transform: 'translateX(0)' },
            },
          },
        },
      },
    };
