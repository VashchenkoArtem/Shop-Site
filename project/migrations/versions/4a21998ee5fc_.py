"""empty message

Revision ID: 4a21998ee5fc
Revises: 4ec45fb9fc68
Create Date: 2024-05-09 21:48:26.874564

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a21998ee5fc'
down_revision = '4ec45fb9fc68'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('path', sa.Integer(), nullable=True))
        batch_op.drop_column('count')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('count', sa.INTEGER(), nullable=True))
        batch_op.drop_column('path')

    # ### end Alembic commands ###