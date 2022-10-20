# Guia de estilos

Toda a estilização que será usada no projeto dentro do figma.

[Link do projeto no figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358)

## Fonte

```html
Open Sans:
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
/>
```

## Cores

botão: `#0480DC`

cabeçalho mobile: `#15191C`

cabeçalho: `#1D232A`

cartão: `#2C343A`

corpo: `#1D232A`

fonte alternativa: `#95999C`

fonte: `#FFFFFF`

links: `#0480DC`

menu lateral: `#15191C`

sombras: `0px 4px 4px rgba(0, 0, 0, 0.16)`

## Ícones

Estão dentro do arquivo de fonte `icones.ttf`. Para usar, primeiro importe a fonte no projeto usando `@font-face` e depois utilize os códigos abaixo para exibir o ícone.

```css
@font-face {
  font-family: 'icones';
  src: url(../font/icones.ttf);
}
```

> Cuidado com a localização do arquivo `icones.ttf`

Camisas = `\e900`

Carrinho = `\e901`

Inicio = `\e902`

Integrantes = `\e903`

Menu = `\e904`

Moeda = `\e905`

Notificação = `\e906`

Pico = `\e908`

Picos = `\e909`

Pinturas = `\e90a`

Play = `\e90b`

Relogio = `\e90c`

Seta-baixo = `\e90d`

Videos = `\e90e`

Visualizacao = `\e90f`

## Espaçamentos

Espaçamento entre o título do cartão de recentes e seus itens: `24px`

Espaçamento interno do corpo: `16px`

Espaço entre elementos do botão: `8px`

Espaço entre elementos: `16px/8px`

Espaço interno botão: `8px`

## Tamanhos

Altura mínima de um cartão: `320px`

Largura máxima de um cartão desktop: `256px`

Largura máxima do conteúdo principal: `1120px`

Tamanho do dispositivo desktop: `1440px`

Tamanho do dispositivo mobile: `360px`
