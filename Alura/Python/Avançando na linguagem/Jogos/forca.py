import random


def jogar():
    imprimir_mensagem_abertura()

    palavra_secreta = coletar_palavra_secreta()
    letras_acertadas = inicializa_letras_acertadas(palavra_secreta)

    enforcado = False
    acertou = False
    erros = 0
    total_erros = 7

    print('\njogando...')
    print('\n', letras_acertadas)

    while (not enforcado and not acertou):
        chute = perguntar_qual_chute()

        if (chute in palavra_secreta):
            marca_chute_correto(chute, palavra_secreta, letras_acertadas)
        else:
            erros += 1
            desenha_forca(erros)

        enforcado = erros == total_erros
        acertou = '_' not in letras_acertadas

        print('\n', letras_acertadas)

    imprime_resultado(acertou, palavra_secreta)


def imprimir_mensagem_abertura():
    print('*************************************')
    print('**** Bem-vindo ao Jogo da Forca! ****')
    print('*************************************')


def coletar_palavra_secreta():
    with open('Python\Avançando na linguagem\Jogos\palavras.txt', 'r') as arquivo:
        lista_palavras = [palavra.strip() for palavra in arquivo]
    random_index = random.randrange(0, len(lista_palavras))
    palavra_secreta = lista_palavras[random_index].upper()
    return palavra_secreta


def inicializa_letras_acertadas(palavra):
    return ['_' for letra in palavra]


def perguntar_qual_chute():
    return input('\nDigite seu chute: ').strip().upper()


def marca_chute_correto(chute, palavra_secreta, letras_acertadas):
    index = 0
    for letra in palavra_secreta:
        if (chute == letra):
            letras_acertadas[index] = letra
        index += 1


def desenha_forca(erros):
    print("  _______     ")
    print(" |/      |    ")

    if (erros == 1):
        print(" |      (_)   ")
        print(" |            ")
        print(" |            ")
        print(" |            ")

    if (erros == 2):
        print(" |      (_)   ")
        print(" |      \     ")
        print(" |            ")
        print(" |            ")

    if (erros == 3):
        print(" |      (_)   ")
        print(" |      \|    ")
        print(" |            ")
        print(" |            ")

    if (erros == 4):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |            ")
        print(" |            ")

    if (erros == 5):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |            ")

    if (erros == 6):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      /     ")

    if (erros == 7):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      / \   ")

    print(" |            ")
    print("_|___         ")
    print()


def imprime_resultado(acertou, palavra_secreta):
    if (acertou):
        print("\nParabéns, você ganhou!")
        print("       ___________      ")
        print("      '._==_==_=_.'     ")
        print("      .-\\:      /-.    ")
        print("     | (|:.     |) |    ")
        print("      '-|:.     |-'     ")
        print("        \\::.    /      ")
        print("         '::. .'        ")
        print("           ) (          ")
        print("         _.' '._        ")
        print("        '-------'       ")
    else:
        print("\nPuxa, você foi enforcado!")
        print("A palavra era {}".format(palavra_secreta))
        print("    _______________       ")
        print("   /               \      ")
        print("  /                 \     ")
        print("//                   \/\  ")
        print("\|   XXXX     XXXX   | /  ")
        print(" |   XXXX     XXXX   |/   ")
        print(" |   XXX       XXX   |    ")
        print(" |                   |    ")
        print(" \__      XXX      __/    ")
        print("   |\     XXX     /|      ")
        print("   | |           | |      ")
        print("   | I I I I I I I |      ")
        print("   |  I I I I I I  |      ")
        print("   \_             _/      ")
        print("     \_         _/        ")
        print("       \_______/          ")


if (__name__ == '__main__'):
    jogar()
