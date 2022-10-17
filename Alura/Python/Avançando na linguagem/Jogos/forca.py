def jogar():
    print('')
    print('*************************************')
    print('**** Bem-vindo ao Jogo da Forca! ****')
    print('*************************************')

    palavra_secreta = 'berserk'
    enforcado = False
    acertou = False

    while (not enforcado and not acertou):
        print('\njogando...')
        chute = input('\ndigite seu chute: ')
        if (chute == palavra_secreta):
            acertou = True

    print('\nFim de Jogo!')


if (__name__ == '__main__'):
    jogar()
