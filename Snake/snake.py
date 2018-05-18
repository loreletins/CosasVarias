import pygame
Blanco = (255, 255, 255)
Negro = (0, 0, 0)

pygame.init()
superficie = pygame.display.set_mode((800,500))
pygame.display.set_caption('Serpiente')

gameExit = False

mover_x = 300
mover_y = 300
mover_x_cambio = 0
mover_y_cambio = 0
reloj = pygame.time.Clock()

while not gameExit:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			gameExit = True
	if event.type == pygame.KEYDOWN:
		if event.key == pygame.K_LEFT:
			mover_x_cambio = -10
			mover_y_cambio = 0
		elif event.key == pygame.K_RIGHT:
			mover_x_cambio = 10
			mover_y_cambio = 0
		elif event.key == pygame.K_UP:
			mover_y_cambio = -10
			mover_x_cambio = 0
		elif event.key == pygame.K_DOWN:
			mover_y_cambio = 10
			mover_x_cambio = 0

	mover_y += mover_y_cambio
	mover_x += mover_x_cambio
	superficie.fill(Blanco)
	pygame.draw.rect(superficie, Negro, [mover_x, mover_y, 10, 10])
	pygame.display.update()

	reloj.tick(30)

pygame.quit()
quit()

