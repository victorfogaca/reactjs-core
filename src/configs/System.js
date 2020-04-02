export const System =
  {
      core ://Dados core do sistema
      {
          version : "0.0.1",
          title : 'WF Admin',
          url : 'https://www.webfoundation.com.br',
          copyright : 'Copyright ©2020 Web Foundation Tecnologia',
          logo :
          {
              login:require('../assets/logo-login.png'),
              header:require('../assets/logo-header.png'),
          },
          author: "Web Foundation Tecnologia",
          storageKey:'WFAccessObject'
      },
      api ://Dados de acesso a API
      {
          url : 'https://api-intranet.webfoundation.com.br',
      },
      saas ://Software as a service - Software como serviço
      {
          name : 'Cliente Contratante',
          description : 'Aqui vai alguma descrição do cliente',
          url : 'https://www.sitecliente.com.br',
          license: "WF-LC-167F-A839-99BC-2ADF",
      }
  };