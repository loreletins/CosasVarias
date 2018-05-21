import pygame
import random
import time

Blanco = (255, 255, 255)
Negro = (0, 0, 0)
Rojo = (255, 0, 0)

pygame.init()
superficie = pygame.display.set_mode((800,500))
pygame.display.set_caption('Serpiente')

serp_tamano = 10
ancho = 800
altura = 500
CPS = 20

font = pygame.font.SysFont(None, 25)


def intro_juego():
	intro = True
	while intro:
		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_c:
					intro = False
				elif event.type == pygame.K_q:
					pygame.quit()
					quit()

		superficie.fill(Blanco)
		message_to_screen("Bienvenid@s", Negro, -100)
		pygame.display.update()
		reloj.tick(CPS)

def serpiente (serp_tamano, listaSerpiente):
	for i in listaSerpiente:
		pygame.draw.rect(superficie, Negro, [i[0], i[1], serp_tamano, serp_tamano])

def message_to_screen(msg, color, y_displace=0):
	#pantalla_texto = font.render(msg, True, color)
	#superficie.blit(pantalla_texto, [300, 300])
	textSur, textRect = text_objetos(msg, color)
	textRect.center = (ancho/2), (altura/2) + y_displace
	superficie.blit(textSur, textRect)

reloj = pygame.time.Clock()

def text_objetos(text, color):
	textSuperficie = font.render(text, True, color)
	return textSuperficie, textSuperficie.get_rect()

def puntos(score):
	text = font.render("Puntos: " + str(score), True, Negro)
	superficie.blit(text, [0, 0])

def pausa():
	pausado = True

	while pausado:

		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				pygame.quit()
				quit()
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_q:
					pygame.quit()
					quit()
				elif event.key == pygame.K_c:
					pausado = False

		superficie.fill(Blanco)
		message_to_screen("pausa", Negro)
		pygame.display.update()
		reloj.tick(5)

def gameLoop():
	gameExit = False
	gameOver = False

	mover_x = 300
	mover_y = 300

	mover_x_cambio = 0
	mover_y_cambio = 0

	listaSerpiente = []
	largoSerpiente = 1

	azarManzanaX = round(random.randrange(0, 300 - 20)/20.0)*20.0
	azarManzanaY = round(random.randrange(0, 300 - 20)/20.0)*20.0

	while not gameExit:

		while gameOver == True:

			superficie.fill(Blanco)
			message_to_screen("Game Over", Negro, -50)
			message_to_screen("Para continuar presione c para terminar q", Negro, 50 )
			pygame.display.update()

			for event in pygame.event.get():
				if event.type == pygame.KEYDOWN:
					if event.key == pygame.K_q:
						gameExit = True
						gameOver = False
					#if event.key == pygame.K_c:
					#	gameLoop()

		for event in pygame.event.get():
			if event.type == pygame.QUIT:
				gameExit = True
			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_LEFT:
					mover_x_cambio = - serp_tamano
					mover_y_cambio = 0
				elif event.key == pygame.K_RIGHT:
					mover_x_cambio = serp_tamano
					mover_y_cambio = 0
				elif event.key == pygame.K_UP:
					mover_y_cambio = - serp_tamano
					mover_x_cambio = 0
				elif event.key == pygame.K_DOWN:
					mover_y_cambio = serp_tamano
					mover_x_cambio = 0
				elif event.key == pygame.K_p:
					pausa()

			if mover_x >= ancho or mover_x < 0 or mover_y >= altura or mover_y <0:
				gameOver = True

			mover_y += mover_y_cambio
			mover_x += mover_x_cambio
			superficie.fill(Blanco)
			pygame.draw.rect(superficie, Rojo, [azarManzanaX, azarManzanaY, 10, 10])

			cabezaSerpiente = []
			cabezaSerpiente.append(mover_x)
			cabezaSerpiente.append(mover_y)
			listaSerpiente.append(cabezaSerpiente)
			if len(listaSerpiente)> largoSerpiente:
				del listaSerpiente[0]

			for eachSegment in listaSerpiente[:-1]:
				if eachSegment == cabezaSerpiente:
					gameExit = True

			serpiente(serp_tamano, listaSerpiente)
			puntos(largoSerpiente-1)
			pygame.display.update()

			if mover_x == azarManzanaX and mover_y == azarManzanaY:
				azarManzanaX = round(random.randrange(0, 300 - 20)/20.0)*20.0
				azarManzanaY = round(random.randrange(0, 300 - 20)/20.0)*20.0
				largoSerpiente += 1

			reloj.tick(CPS)

	#message_to_screen("Has perdido", Rojo)
	#pygame.display.update()
	#time.sleep(3)

	pygame.quit()
	quit()

intro_juego()
gameLoop()